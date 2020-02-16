import {Player} from '../character/concrete/Player.js'
import {Context} from '../defaults/Context.js'

export abstract class Engine {

    public abstract action(cmd: string, player: Player): void

    protected commandChecker(cmd: string, player: Player): Function {
        return (context: Context, cb: Function) => {
            if (player.meta.context === context) cb(cmd, player)
        }
    }

}
