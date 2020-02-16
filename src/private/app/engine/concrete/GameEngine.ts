import {Player} from '../../character/concrete/Player.js'
import {BattleEngine} from './BattleEngine.js'
import {MapEngine} from './MapEngine.js'
import {EventEngine} from './EventEngine.js'
import {Context} from '../../defaults/Context.js'
import {ShopEngine} from './ShopEngine.js'
import {InventoryEngine} from './InventoryEngine.js'
import {Engine} from '../Engine.js'

export class GameEngine extends Engine {

    private battleEngine: BattleEngine
    private mapEngine: MapEngine
    private eventEngine: EventEngine
    private shopEngine: ShopEngine
    private inventoryEngine: InventoryEngine

    constructor() {
        super()

        this.battleEngine = new BattleEngine()
        this.mapEngine = new MapEngine()
        this.eventEngine = new EventEngine()
        this.shopEngine = new ShopEngine()
        this.inventoryEngine = new InventoryEngine()
    }

    public start(name: string, player: Player) {
        player.name = name
        player.gameStarted()
    }

    public run(cmd: string, player: Player) {
        if (player.startedGame) {
            const command = this.contextChecker(cmd, player)

            command(Context.FREE_ROAM, this.action)
            command(Context.BATTLE, this.battleEngine.action)
            command(Context.EVENT, this.eventEngine.action)
            command(Context.SHOP, this.shopEngine.action)
            command(Context.INVENTORY, this.inventoryEngine.action)

        } else this.start(cmd, player)
    }

    public action(cmd: string, player: Player) {



    }

    private contextChecker(cmd: string, player: Player): Function {
        return (context: Context, cb: Function) => {
            if (player.meta.context === context) cb(cmd, player)
        }
    }

}
