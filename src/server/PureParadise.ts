import {Socket} from 'socket.io'
import {RequestManager} from './managers/RequestManager'

const requestManager = new RequestManager()

export class PureParadise {
    connect(socket: Socket) {
        const id = socket.id
        const room = requestManager.roomManager.assignRoom(id)
        requestManager.playerManager.add(id, room)

        socket.join(room)

        socket.on('client:start', cmd => requestManager.clientStart(cmd, room, socket))
        socket.on('client:command', cmd => requestManager.gameRun(cmd, socket))
        socket.on('room:chat', cmd => requestManager.chat(cmd, socket))
        socket.on('disconnect', cmd => requestManager.playerLeftRoom(cmd, socket))
    }
}
