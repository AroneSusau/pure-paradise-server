import {Socket} from 'socket.io'

export class Observer {

    private _id: string
    private _socket: Socket

    constructor(id: string, socket: Socket) {
        this._id = id
        this._socket = socket
    }

    public notify(obj: Object) {
        this._socket.emit('result', obj)
    }

    get id(): string {
        return this._id
    }
}
