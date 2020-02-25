import {Socket} from 'socket.io'
import {GameResponse} from '../../types/GameResponse.js'
import {PlayerJoinedResponse} from '../../types/PlayerJoinedResponse.js'
import {NewPlayerDump} from '../../types/NewPlayerDump.js'

export class Observer {

    public notify(obj: GameResponse, socket: Socket) {
        socket.emit('result', obj)
    }

    public broadcastMovement(obj: any, socket: Socket) {
        socket.to(obj.room).emit('movement', obj)
    }

    public newPlayerRoomDump(obj: NewPlayerDump, socket: Socket) {
        socket.emit('startDump', obj)
    }

    public playerJoinedRoom(obj: PlayerJoinedResponse, socket: Socket) {
        socket.to(obj.room).emit('playerJoinedRoom', obj)
    }

    public playerLeftRoom(obj: PlayerJoinedResponse, socket: Socket) {
        socket.to(obj.room).emit('playerLeftRoom', obj)
    }

}
