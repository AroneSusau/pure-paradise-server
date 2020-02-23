import {Socket} from 'socket.io'
import {GameResponse} from '../../types/GameResponse.js'

export class Observer {

    public notify(obj: GameResponse, socket: Socket) {
        socket.emit('result', obj)
    }

}
