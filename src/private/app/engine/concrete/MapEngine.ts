import {Engine} from '../Engine.js'
import {Player} from '../../character/concrete/Player.js'

export class MapEngine extends Engine {

    public action(cmd: string, player: Player, exec: Function) {
        return [
            true
        ]
    }

    protected invalidCommand(cmd: string, player: Player): void {
    }

}
