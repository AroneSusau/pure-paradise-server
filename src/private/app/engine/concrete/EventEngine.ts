import {Player} from '../../character/concrete/Player.js'
import {Engine} from '../Engine.js'
import {MapManager} from '../../map/MapManager.js'
import {Context} from '../../defaults/Context.js'
import {DialogManager} from '../../dialog/DialogManager.js'
import {Socket} from 'socket.io'

export class EventEngine extends Engine {

    public start(cmd: string, player: Player, socket: Socket): void {
        player.name = cmd
        player.meta.context = Context.FREE_ROAM
        this._observer.notify({
            id: player.id,
            flags: {
                mapUpdate: true,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: true,
                generalUpdate: true,
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
            },
            general: {
                text: this.dialogManager['e0s0'](player)
            },
            map: {
                name: MapManager.venmark.name,
                raw: MapManager.venmark.raw
            }
        }, socket)
    }

    public action(cmd: string, player: Player, socket: Socket): void {

    }

}
