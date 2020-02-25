import {Socket} from 'socket.io'
import {GameEngine} from './app/engine/concrete/GameEngine.js'
import {Player} from './app/character/concrete/Player.js'
import {Observer} from './observer/Observer.js'
import {SocketEvents} from './app/defaults/SocketEvents.js'
import {Defaults} from './app/defaults/Defaults.js'
import {RoomManager} from './room/RoomManager.js'
import {RoomNames} from './app/defaults/RoomNames.js'
import {Context} from './app/defaults/Context.js'
import {CharacterTypes} from './app/defaults/CharacterTypes.js'

const roomLimit = 10

const observer = new Observer()
const gameEngine = new GameEngine(observer)
const players = new Map<string, Player>()
const roomManager = new RoomManager(roomLimit)
const defaults = new Defaults()

export class PureParadise {
    connect(socket: Socket) {
        const id = socket.id
        const roomName = roomManager.assignRoom(id)
        const player = new Player(id, roomName, defaults)
        players.set(id, player)

        socket.on(SocketEvents.COMMAND, cmd => {
            if (player.meta.context === Context.START)
                socket.join(roomName)

            if (roomName != RoomNames.FULL) {
                if (player.meta.context === Context.START) {
                    broadcastNewPlayer(id, cmd, player, socket)
                    newPlayerDataDump(player, socket)
                }

                gameEngine.run(cmd, players.get(id), socket)
            } else adviseRoomsFull(id, socket)
        })

        socket.on('disconnect', () => {
            if (roomName != RoomNames.FULL)
                roomManager.unassignedRoom(id, players.get(id).room)

            broadcastDisconnectedPlayer(id, player, socket)
            players.delete(id)
        })
    }
}

function broadcastNewPlayer(id: string, cmd: string, player: Player, socket: Socket) {
    observer.playerJoinedRoom({
        id: id,
        name: cmd,
        room: player.room,
        type: CharacterTypes.PLAYER,
        mapId: player.location.global.index,
        message: `[[gi;green;]\n${cmd} has joined the game!\n]`,
        location: {
            index: player.location.local.index
        }
    }, socket)
}

function newPlayerDataDump(player: Player, socket: Socket) {
    const playerKeys: Array<string> = []
    const playerLocalIndexes: Array<number> = []
    const playerGlobalIndexes: Array<number> = []

    players.forEach(otherPlayer => {
        if (otherPlayer.id != player.id) {
            playerKeys.push(`${otherPlayer.id}::${otherPlayer.name}`)
            playerLocalIndexes.push(otherPlayer.location.local.index)
            playerGlobalIndexes.push(otherPlayer.location.global.index)
        }
    })

    observer.newPlayerRoomDump({
        playerKeys: playerKeys,
        playerLocalIndexes: playerLocalIndexes,
        playerGlobalIndexes: playerGlobalIndexes,
        location: {
            localIndex: player.location.local.index,
            globalIndex: player.location.global.index
        }
    }, socket)
}

function broadcastDisconnectedPlayer(id: string, player: Player, socket: Socket) {
    if (player.meta.context != Context.START) observer.playerLeftRoom({
        id: id,
        name: player.name,
        room: player.room,
        type: CharacterTypes.PLAYER,
        mapId: player.location.global.index,
        message: `[[gi;gray;]\n${player.name} has left the game.\n]`,
        location: {
            index: player.location.local.index
        }
    }, socket)
}

function adviseRoomsFull(id: string, socket: Socket) {
    socket.emit('result', {
        id,
        flags: {
            mapUpdate: false,
            playerUpdate: false,
            battleUpdate: false,
            eventUpdate: false,
            contextUpdate: false,
            generalUpdate: false,
            error: true
        },
        error: {
            message: "[[gi;gold;]\nUnfortunately, all the game rooms are currently full. Please" +
                " refresh" +
                " and try again later.\n]"
        }
    })
}
