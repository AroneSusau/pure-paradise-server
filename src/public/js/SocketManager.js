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
    }

    onStart(response, gameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player => {
                gameDataManager.setPlayer(player)
            })
        })
    }

    movement(response, gameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player => {
                gameDataManager.updatePlayer(player)
            })
        })
    }

    roomLeft(response, gameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player => {
                gameDataManager.deletePlayer(player.id)
            })
        })
        this.terminal.echo(response.message)
    }

    mapUpdate(response, gameDataManager, uiManager) {
        gameDataManager.originalMap = response.map.raw
        uiManager.setMap(response.map.raw)
    }

    playerJoined(response, gameDataManager) {
        this.validatePlayersField(response, players => {
            players.forEach(player =>
                gameDataManager.setPlayer(player))
        })
        this.terminal.echo(response.message)
    }

    playerUpdate(response, gameDataManager) {
        gameDataManager.setClient(response.player.coords)
    }

    validatePlayersField(response, callback) {
        const players = response.players || false

        if (players && players.length > 0) {
            callback(players)
        } else console.warn("Players field is empty or undefined.")
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
        this.terminal.echo(response.message)
    }

    error(response, gameDataManager) {
        this.terminal.echo(response.error.message)
    }

}
