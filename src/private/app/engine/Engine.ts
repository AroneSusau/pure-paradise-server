import {Player} from '../character/concrete/Player.js'
import {Observer} from '../../observer/Observer.js'
import {DialogManager} from '../dialog/DialogManager.js'
import {Socket} from 'socket.io'

export abstract class Engine {

    protected _observer: Observer
    protected dialogManager: DialogManager

    constructor(observer: Observer) {
        this._observer = observer
        this.dialogManager = new DialogManager()
    }

    public abstract action(cmd: string, player: Player, socket: Socket): void

    protected invalidAction(cmd: string, player: Player, socket: Socket): void {
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: false,
                playerUpdate: false,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: false,
                error: true
            },
            error: {
                message: "Invalid action entered, please try again."
            }
        }, socket)
    }

}
