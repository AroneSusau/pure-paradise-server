import {Engine} from '../Engine.js'
import {Player} from '../../character/concrete/Player.js'
import {Command} from '../../defaults/Command.js'
import {Socket} from 'socket.io'

export class MapEngine extends Engine {

    public action(cmd: string, player: Player, socket: Socket): void {
        switch (cmd) {
            case Command.W:
                player.location.local.decremementY()
                break;
            case Command.A:
                player.location.local.decremementX()
                break;
            case Command.S:
                player.location.local.incrementY()
                break;
            case Command.D:
                player.location.local.incrementX()
                break;
        }
        this.movePlayer(player, socket)
    }

    public movePlayer(player: Player, socket: Socket) {
        this._observer.notify({
            id: player.id,
            flags: {
                mapUpdate: false,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: false,
                error: false
            },
            player: {
                name: player.name,
                context: player.meta.context,
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    localIndex: player.location.local.index,
                    globalIndex: player.location.global.index
                }

            }
        }, socket)
    }

}


