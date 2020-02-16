import {Socket} from 'socket.io'

export class Observer {

    private _socket: Socket

    constructor(id: string, socket: Socket) {
        this._id = id
        this._socket = socket
    }

    private _id: string

    get id(): string {
        return this._id
    }

    public notify(obj: Object) {
        this._socket.emit('result', obj)
    }
}
