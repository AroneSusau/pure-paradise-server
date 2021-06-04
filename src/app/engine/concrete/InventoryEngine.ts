import {Player} from '../../character/concrete/Player'
import {Engine} from '../Engine'
import {Socket} from 'socket.io'
import { Context } from '../../defaults/Context'

export class InventoryEngine extends Engine {

    public action(cmd: string, player: Player, socket: Socket): void {
        player.meta.context != Context.INVENTORY ?
            this.start(cmd, player, socket) :
            this.run(cmd, player, socket)
    }

    public start(cmd: string, player: Player, socket: Socket): void {
        player.meta.context = Context.INVENTORY

        console.log(cmd)
    }

    public run(cmd: string, player: Player, socket: Socket): void {
        console.log(cmd)
    }  
}
