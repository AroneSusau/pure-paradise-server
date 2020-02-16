import {Socket} from 'socket.io'

export class Observer {

    private _id: number
    private _socket: Socket

    constructor(socket: Socket) {
        this._socket = socket
    }

    public notify() {

        this._socket.emit("result", "RESULT EMITTED")
    }

    get id(): number {
        return this._id
    }
}
