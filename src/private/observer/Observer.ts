import {Socket} from 'socket.io'

export class Observer {

    private _socket: Socket

    public notify(obj: Object) {
        this._socket.emit('result', obj)
    }

    get socket(): Socket {
        return this._socket
    }

    set socket(value: Socket) {
        this._socket = value
    }
}
