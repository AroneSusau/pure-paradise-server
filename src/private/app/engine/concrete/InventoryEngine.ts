import {Player} from '../../character/concrete/Player.js'
import {Engine} from '../Engine.js'

export class InventoryEngine extends Engine {

    public action(cmd: string, player: Player): void {

    }

    protected invalidAction(cmd: string, player: Player): void {
    }

}
