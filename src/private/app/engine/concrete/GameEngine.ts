import {Player} from '../../character/concrete/Player.js'
import {BattleEngine} from './BattleEngine.js'
import {MapEngine} from './MapEngine.js'
import {EventEngine} from './EventEngine.js'
import {Context} from '../../defaults/Context.js'
import {ShopEngine} from './ShopEngine.js'
import {InventoryEngine} from './InventoryEngine.js'
import {Engine} from '../Engine.js'
import {Command} from '../../defaults/Command.js'

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
        player.meta.context = Context.FREE_ROAM
    }

    public run(cmd: string, player: Player) {
        if (player.meta.context != Context.START) {
            const exec = this.contextChecker(cmd, player)

            exec(Context.FREE_ROAM, this)
            exec(Context.BATTLE, this.battleEngine)
            exec(Context.EVENT, this.eventEngine)
            exec(Context.SHOP, this.shopEngine)
            exec(Context.INVENTORY, this.inventoryEngine)

        } else this.start(cmd, player)
    }

    public action(cmd: string, player: Player, exec: Function) {
        return [
            exec(Command.W, this.mapEngine),
            exec(Command.S, this.mapEngine),
            exec(Command.A, this.mapEngine),
            exec(Command.D, this.mapEngine),
            exec(Command.INV, this.inventoryEngine)
        ]
    }

    private contextChecker(cmd: string, player: Player): Function {
        return function inner(context: Context, engine: Engine) {
            if (player.meta.context === context) engine.validate(cmd, player)
        }
    }

    protected invalidCommand(cmd: string, player: Player): void {

    }

}
