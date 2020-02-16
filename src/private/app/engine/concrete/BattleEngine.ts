import {Player} from '../../character/concrete/Player.js'
import {Engine} from '../Engine.js'

export class BattleEngine extends Engine {

    public action(cmd: string, player: Player): void {

    }

    protected invalidAction(cmd: string, player: Player): void {
    }

}
