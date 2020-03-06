import {Socket} from 'socket.io'
import {RoomNames} from '../../app/defaults/RoomNames.js'
import {Context} from '../../app/defaults/Context.js'
import {PlayerManager} from './PlayerManager.js'
import {Observer} from '../observer/Observer.js'
import {GameEngine} from '../../app/engine/concrete/GameEngine.js'
import {RoomManager} from './RoomManager.js'

export class RequestManager {

    private readonly _observer: Observer
    private readonly _gameEngine: GameEngine
    private readonly _playerManager: PlayerManager
    private readonly _roomManager: RoomManager

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
                room: room,
                count: this._playerManager.size(room),
                players: this._playerManager.getAllPlayerUpdates(player.id, room)
            }, socket)

            this._gameEngine.run(cmd, player, socket)
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
        const message = `${player.name} has joined the quest!`
        this._observer.playerJoinedRoom({
            room: player.room,
            count: this._playerManager.size(player.room),
            message: message,
            players: [this._playerManager.getPlayerUpdate(player)]
        }, socket)
    }

    playerLeftRoom(cmd: string, socket: Socket) {
        const player = this._playerManager.get(socket.id) || false
        if (player) {
            if (player.meta.context != Context.START) {
                const message = `${player.name} has abandoned the quest!`
                this._observer.playerLeftRoom({
                    room: player.room,
                    count: this._playerManager.size(player.room) - 1,
                    message: message,
                    players: [this._playerManager.getPlayerUpdate(player)]
                }, socket)
            }
            this._playerManager.remove(socket.id)
        }
    }

    chat(cmd: string, socket: Socket) {
        const player = this._playerManager.get(socket.id)

        this._observer.chat({
            room: player.room,
            count: this._playerManager.size(player.room),
            message: `${player.name}: ${cmd}`
        }, socket)
    }

    fullRoom(id: string, socket: Socket) {
        this._observer.roomFull({
            id: id,
            type: 0,
            message: 'Unfortunately, all the game rooms are currently full. Please refresh and try again later.'
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
