import {Socket} from 'socket.io'
import {GameUpdate} from '../../../types/GameUpdate.js'
import {ErrorResponse} from '../../../types/ErrorResponse.js'
import {RoomUpdate} from '../../../types/RoomUpdate.js'

export class Observer {

    // Client game updates
    public clientStart(obj: RoomUpdate, socket: Socket) {
        socket.emit('client:start', obj)
    }

    public notify(obj: GameUpdate, socket: Socket) {
        socket.emit('client:command', obj)
    }

    // Room Updates
    public playerJoinedRoom(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:joined', obj)
    }

    public playerLeftRoom(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:left', obj)
    }

    public roomMovement(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:movement', obj)
    }

    public chat(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:chat', obj)
    }

    // Error Updates
    public roomFull(obj: ErrorResponse, socket: Socket) {
        socket.emit('error:full', obj)
    }

}
