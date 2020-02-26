import {Socket} from 'socket.io'
import {GameResponse} from '../../../types/GameResponse.js'
import {PlayerJoinedResponse} from '../../../types/PlayerJoinedResponse.js'
import {PlayerStart} from '../../../types/PlayerStart.js'
import {ErrorResponse} from '../../../types/ErrorResponse.js'

export class Observer {

    public notify(obj: GameResponse, socket: Socket) {
        socket.emit('client:command', obj)
    }

    public clientStart(obj: PlayerStart, socket: Socket) {
        socket.emit('client:start', obj)
    }

    public roomMovement(obj: any, socket: Socket) {
        socket.to(obj.room).emit('room:movement', obj)
    }

    public playerJoinedRoom(obj: PlayerJoinedResponse, socket: Socket) {
        socket.to(obj.room).emit('room:joined', obj)
    }

    public playerLeftRoom(obj: PlayerJoinedResponse, socket: Socket) {
        socket.to(obj.room).emit('room:left', obj)
    }

    public roomFull(obj: ErrorResponse, socket: Socket) {
        socket.emit('room:full', obj)
    }

}
