import {Player} from '../../character/concrete/Player.js'
import {Engine} from '../Engine.js'

export class EventEngine extends Engine {

    // TODO add actual events
    public action(cmd: string, player: Player, exec: Function) {
        return [
            true
        ]
    }

    protected invalidCommand(cmd: string, player: Player): void {
    }

}
