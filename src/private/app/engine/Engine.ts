import {Player} from '../character/concrete/Player.js'
import {Observer} from '../../observer/Observer.js'
import {DialogManager} from '../dialog/DialogManager.js'
import {SocketEvents} from '../defaults/SocketEvents.js'

export abstract class Engine {

    protected _observer: Observer
    protected dialogManager: DialogManager

    constructor(observer: Observer) {
        this._observer = observer
        this.dialogManager = new DialogManager()
    }

    public abstract action(cmd: string, player: Player): void

    protected invalidAction(cmd: string, player: Player): void {
        this._observer.socket.emit(SocketEvents.RESULT, {
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
        })
    }

}
