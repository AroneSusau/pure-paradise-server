import {Socket} from 'socket.io'
import {GameEngine} from './app/engine/concrete/GameEngine.js'
import {Player} from './app/character/concrete/Player.js'
import {Observer} from './observer/Observer.js'

const gameEngine = new GameEngine()
const observers = new Map<string, Observer>()
const players = new Map<string, Player>()

export class PureParadise {
    connection(socket: Socket) {
        const id = socket.id
        const player = new Player(id)
        const observer = new Observer(id, socket)

        players.set(id, player)
        observers.set(id, observer)
        gameEngine.subscribe(observer)

        socket.on('command', cmd => gameEngine.run(cmd, players.get(id)))

    }

    disconnected(socket: Socket) {
        players.delete(socket.id)
        gameEngine.unsubscribe(socket.id)
    }
}
