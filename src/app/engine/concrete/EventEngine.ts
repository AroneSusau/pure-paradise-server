import {Player} from '../../character/concrete/Player'
import {Engine} from '../Engine'
import {MapManager} from '../../map/MapManager'
import {Context} from '../../defaults/Context'
import {AreaNames} from '../../defaults/AreaNames'
import {MapIds} from '../../defaults/MapIds'
import {Socket} from 'socket.io'

export class EventEngine extends Engine {

    public start(cmd: string, player: Player, socket: Socket): void {
        player.name = cmd
        player.meta.context = Context.FREE_ROAM
        this._observer.notify({
            id: player.id,
            room: player.room,
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
                context: Context.FREE_ROAM,
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                }
            },
            general: {
                text: this.dialogManager['e0s0'](player)
            },
            map: {
                id: MapIds.VEMARK,
                name: AreaNames.VENMARK,
                raw: MapManager.maps.get(MapIds.VEMARK).raw
            }
        }, socket)
    }

    public action(cmd: string, player: Player, socket: Socket): void {

    }

}
