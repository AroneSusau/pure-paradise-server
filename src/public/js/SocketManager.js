module.exports = class SocketManager {

    constructor(io) {
        this.socket = io()
    }

    setTerminal(terminal) {
        this.terminal = terminal
    }

    start(cmd) {
        this.socket.emit('client:start', cmd)
    }

    registerEvents(gameDataManager, uiManager) {
        this.socket.on('client:start', response => this.onStart(response, gameDataManager))
        this.socket.on('client:command', response => this.command(response, gameDataManager, uiManager))

        this.socket.on('room:joined', response => this.playerJoined(response, gameDataManager))
        this.socket.on('room:left', response => this.roomLeft(response, gameDataManager))
        this.socket.on('room:movement', response => this.movement(response, gameDataManager))
        this.socket.on('room:chat', response => this.chat(response, gameDataManager))
    }

    command(response, gameDataManager, uiManager) {
        for (let key in response.flags) {
            if (response.flags[key]) {
                this[key](response, gameDataManager, uiManager)
            }
        }

        const map = document.getElementById("map")
        map.scrollTop = map.scrollHeight
    }

    onStart(response, gameDataManager) {
        if (response.players.length > 0) {
            for (let i = 0; i < response.players.length; i++) {
                const {id, name, localIndex, globalIndex} = response.players[i]
                gameDataManager.setPlayer(id, name, localIndex, globalIndex)
            }
        }
    }

    movement(response, gameDataManager) {
        gameDataManager.updatePlayerPosition(response.id, response.location.index, response.mapId)
    }

    roomLeft(response, gameDataManager) {
        gameDataManager.deletePlayer(response.id)

        this.terminal.echo(response.message)
    }

    mapUpdate(response, gameDataManager, uiManager) {
        gameDataManager.originalMap = response.map.raw
        uiManager.setMap(response.map.raw)
    }

    playerJoined(response, gameDataManager) {

        gameDataManager.setPlayer(
            response.id,
            response.name,
            response.mapId,
            response.location.index)

        this.terminal.echo(response.message)
    }

    playerUpdate(response, gameDataManager, uiManager) {
        gameDataManager.setClient(
            response.player.coords.localIndex,
            response.player.coords.globalIndex)
    }

    battleUpdate() {
        console.log("battleUpdate")
    }

    eventUpdate() {
        console.log("eventUpdate")
    }

    contextUpdate() {
        console.log("contextUpdate")
    }

    generalUpdate(response, gameDataManager) {
        this.terminal.echo(response.general.text)
    }

    chat(response, gameDataManager) {
        this.terminal.echo(response.general.text)
    }

    error(response, gameDataManager) {
        this.terminal.echo(response.error.message)
    }

}
