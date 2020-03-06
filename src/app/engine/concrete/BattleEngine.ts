import {Player} from '../../character/concrete/Player.js'
import {Engine} from '../Engine.js'
import {Socket} from 'socket.io'

export class BattleEngine extends Engine {

    public action(cmd: string, player: Player, socket: Socket): void {

    }

}
