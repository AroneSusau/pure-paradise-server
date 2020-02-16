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

    private readonly battleEngine: BattleEngine
    private readonly mapEngine: MapEngine
    private readonly eventEngine: EventEngine
    private readonly shopEngine: ShopEngine
    private readonly inventoryEngine: InventoryEngine

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
        this._subscribers.get(player.id).notify({result: 'game has started'})
    }

    public run(cmd: string, player: Player) {
        if (player.meta.context == Context.START) this.start(cmd, player)
        else {
            switch (player.meta.context) {
                case Context.FREE_ROAM:
                    this.action(cmd, player)
                    break
                case Context.BATTLE:
                    this.battleEngine.action(cmd, player)
                    break
                case Context.EVENT:
                    this.eventEngine.action(cmd, player)
                    break
                case Context.SHOP:
                    this.shopEngine.action(cmd, player)
                    break
                case Context.INVENTORY:
                    this.inventoryEngine.action(cmd, player)
                    break
            }
        }
    }

    public action(cmd: string, player: Player): void {
        switch (cmd) {
            case Command.W || Command.S || Command.A || Command.D:
                this.mapEngine.action(cmd, player)
                break
            case Command.INV:
                this.inventoryEngine.action(cmd, player)
                break
            default:
                this.invalidAction(cmd, player)
        }
    }

    protected invalidAction(cmd: string, player: Player): void {
        console.log('INVALID COMMAND ENTERED')
        this._subscribers.get(player.id).notify({result: 'beep boop beep boop, invalid command entered.'})
    }

}
