import {Socket} from 'socket.io'
import {GameEngine} from './app/engine/concrete/GameEngine.js'
import {Player} from './app/character/concrete/Player.js'
import {Observer} from './observer/Observer.js'
import {SocketEvents} from './app/defaults/SocketEvents.js'

const observer = new Observer()
const gameEngine = new GameEngine(observer)
const players = new Map<string, Player>()

export class PureParadise {
    connect(socket: Socket) {
        const id = socket.id
        const player = new Player(id)

        players.set(id, player)

        socket.on(SocketEvents.COMMAND, cmd => gameEngine.run(cmd, players.get(id), socket))

        socket.on('disconnect', () => {
            players.delete(id)
        })

    }
}
