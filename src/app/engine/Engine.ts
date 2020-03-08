import {Player} from '../character/concrete/Player'
import {Observer} from '../../server/observer/Observer'
import {DialogManager} from '../dialog/DialogManager'
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
        this._observer.invalidCommand({
            id: player.id,
            type: 1,
            message: 'Invalid action entered, please try again.'
        }, socket)
    }

}

