import {Socket} from 'socket.io'
import {GameUpdate} from '../../types/GameUpdate'
import {ErrorResponse} from '../../types/ErrorResponse'
import {RoomUpdate} from '../../types/RoomUpdate'

export class Observer {

    // Global Updates
    public global(obj: RoomUpdate, socket: Socket) {
        socket.broadcast.emit(JSON.stringify(obj))
    }

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

    // Monster Updates
    public monsterSpawned(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:monster:spawned', obj)
    }

    public monsterDefeated(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:monster:defeated', obj)
    }

    public monsterEngaged(obj: RoomUpdate, socket: Socket) {
        socket.to(obj.room).emit('room:monster:engaged', obj)
    }

    // Error Updates
    public roomFull(obj: ErrorResponse, socket: Socket) {
        socket.emit('error:full', obj)
    }

}
