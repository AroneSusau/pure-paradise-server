import {Player} from '../../character/concrete/Player'
import {Engine} from '../Engine'
import {Socket} from 'socket.io'

export class BattleEngine extends Engine {

    public action(cmd: string, player: Player, socket: Socket): void {

    }

}
