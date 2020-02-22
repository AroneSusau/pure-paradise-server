import {Player} from '../../character/concrete/Player.js'
import {Engine} from '../Engine.js'
import {MapManager} from '../../map/MapManager.js'
import {Context} from '../../defaults/Context.js'
import {DialogManager} from '../../dialog/DialogManager.js'

export class EventEngine extends Engine {

    public start(cmd: string, player: Player): void {
        player.name = cmd
        player.meta.context = Context.FREE_ROAM
        this._observer.notify({
            flags: {
                mapUpdate: true,
                playerUpdate: false,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: true,
                error: false
            },
            general: {
                text: this.dialogManager['e0s0'](player)
            },
            map: {
                name: MapManager.venmark.name,
                raw: MapManager.venmark.raw
            }
        })
    }

    public action(cmd: string, player: Player): void {

    }

    protected invalidAction(cmd: string, player: Player): void {
    }

}
