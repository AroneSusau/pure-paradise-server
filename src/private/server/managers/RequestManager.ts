import {Socket} from 'socket.io'
import {RoomNames} from '../../app/defaults/RoomNames.js'
import {CharacterTypes} from '../../app/defaults/CharacterTypes.js'
import {Context} from '../../app/defaults/Context.js'
import {PlayerManager} from './PlayerManager.js'
import {Observer} from '../observer/Observer.js'
import {GameEngine} from '../../app/engine/concrete/GameEngine.js'
import {RoomManager} from './RoomManager.js'

export class RequestManager {

    private _observer: Observer
    private _gameEngine: GameEngine
    private _playerManager: PlayerManager
    private _roomManager: RoomManager

    constructor() {
        this._playerManager = new PlayerManager()
        this._roomManager = new RoomManager()
        this._observer = new Observer()
        this._gameEngine = new GameEngine(this._observer)
    }

    clientStart(cmd: string, room: string, socket: Socket) {
        if (room != RoomNames.FULL) {
            const player = this._playerManager.get(socket.id)

            this._observer.clientStart({
                players: this._playerManager.currentPlayerPositions(player.id)
            }, socket)

            this._gameEngine.run(cmd, this._playerManager.get(socket.id), socket)

            this.playerJoinedRoom(player.id, socket)

        } else this.fullRoom(socket.id, socket)
    }

    gameRun(cmd: string, socket: Socket) {
        const player = this._playerManager.get(socket.id)

        player.room != RoomNames.FULL ?
            this._gameEngine.run(cmd, player, socket) :
            this.fullRoom(player.id, socket)
    }

    playerJoinedRoom(id: string, socket: Socket) {
        const player = this._playerManager.get(socket.id)

        this._observer.playerJoinedRoom({
            id: id,
            name: player.name,
            room: player.room,
            type: CharacterTypes.PLAYER,
            mapId: player.location.global.index,
            message: `[[gi;green;]\n${player.name} has joined the game!\n]`,
            location: {
                index: player.location.local.index
            }
        }, socket)
    }

    playerLeftRoom(cmd: string, socket: Socket) {
        if (this._playerManager.has(socket.id)) {
            const player = this._playerManager.get(socket.id)

            if (player.meta.context != Context.START) this._observer.playerLeftRoom({
                id: socket.id,
                name: player.name,
                room: player.room,
                type: CharacterTypes.PLAYER,
                mapId: player.location.global.index,
                message: `[[gi;gray;]\n${player.name} has left the game.\n]`,
                location: {
                    index: player.location.local.index
                }
            }, socket)
            this._playerManager.remove(socket.id)
        }
    }

    fullRoom(id: string, socket: Socket) {
        this._observer.roomFull({
            id: id,
            type: 0,
            message: '[[gi;gold;]\nUnfortunately, all the game rooms are currently full. Please' +
                ' refresh' +
                ' and try again later.\n]'
        }, socket)
    }


    get observer(): Observer {
        return this._observer
    }

    get gameEngine(): GameEngine {
        return this._gameEngine
    }

    get playerManager(): PlayerManager {
        return this._playerManager
    }

    get roomManager(): RoomManager {
        return this._roomManager
    }
}
