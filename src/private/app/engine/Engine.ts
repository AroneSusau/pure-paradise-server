import {Player} from '../character/concrete/Player.js'
import {Command} from '../defaults/Command.js'
import {Observer} from '../../observer/Observer.js'

export abstract class Engine {

    protected _subscribers: Map<number, Observer>

    protected abstract action(cmd: string, player: Player, cb: Function): Array<Boolean>

    protected abstract invalidCommand(cmd: string, player: Player): void

    public validate(cmd: string, player: Player) {
        const run = this.commandChecker(cmd.toLowerCase(), player)
        const checks = this.action(cmd, player, run)
        const invalid = checks.filter(v => v === false)

        if (invalid) this.invalidCommand(cmd, player)
    }

    public commandChecker(cmd: string, player: Player): (args: Command, cb: Function) => Boolean {
        return function inner(args: Command, cb: Function): Boolean {
            const match = args === cmd
            if (match) cb(cmd, player)
            return match
        }
    }

    protected subscribe(observer: Observer) {
        this._subscribers.set(observer.id, observer)
    }

    protected unsubscribe(observer: Observer) {
        this._subscribers.delete(observer.id)
    }

}
