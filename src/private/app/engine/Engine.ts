import {Player} from '../character/concrete/Player.js'
import {Observer} from '../../observer/Observer.js'

export abstract class Engine {

    protected _subscribers: Map<string, Observer>

    constructor() {
        this._subscribers = new Map<string, Observer>()
    }

    public abstract action(cmd: string, player: Player): void

    protected abstract invalidAction(cmd: string, player: Player): void

    public subscribe(observer: Observer) {
        this._subscribers.set(observer.id, observer)
    }

    public unsubscribe(id: string) {
        this._subscribers.delete(id)
    }

}
