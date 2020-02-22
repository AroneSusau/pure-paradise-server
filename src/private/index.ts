import {Socket} from 'socket.io'
import {GameEngine} from './app/engine/concrete/GameEngine.js'
import {Player} from './app/character/concrete/Player.js'
import {Observer} from './observer/Observer.js'

const observer = new Observer()
const gameEngine = new GameEngine(observer)
const players = new Map<string, Player>()

export class PureParadise {
    connection(socket: Socket) {
        const id = socket.id
        const player = new Player(id)

        observer.socket = socket
        players.set(id, player)

        socket.on('command', cmd => gameEngine.run(cmd, players.get(id)))

    }

    disconnected(socket: Socket) {
        players.delete(socket.id)
    }
}
