import {Engine} from '../Engine.js'
import {Player} from '../../character/concrete/Player.js'
import {Command} from '../../defaults/Command.js'

export class MapEngine extends Engine {

    public action(cmd: string, player: Player): void {
        switch (cmd) {
            case Command.W:
                player.location.local.decremementY()
                this.movePlayer(player)
                break;
            case Command.A:
                player.location.local.decremementX()
                this.movePlayer(player)
                break;
            case Command.S:
                player.location.local.incrementY()
                this.movePlayer(player)
                break;
            case Command.D:
                player.location.local.incrementX()
                this.movePlayer(player)
                break;
        }
    }

    public movePlayer(player: Player) {
        this._observer.notify({
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
        })
    }

}


