import {Player} from '../character/concrete/Player.js'
import {Observer} from '../../observer/Observer.js'
import {DialogManager} from '../dialog/DialogManager.js'

export abstract class Engine {

    protected _observer: Observer
    protected dialogManager: DialogManager

    constructor(observer: Observer) {
        this._observer = observer
        this.dialogManager = new DialogManager()
    }

    public abstract action(cmd: string, player: Player): void

    protected abstract invalidAction(cmd: string, player: Player): void

}
