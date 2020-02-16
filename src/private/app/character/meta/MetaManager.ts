import {Context} from '../../defaults/Context.js'
import {BattleMeta} from './BattleMeta.js'
import {EventMeta} from './EventMeta.js'
import {ShopMeta} from './ShopMeta.js'
import {InventoryMeta} from './InventoryMeta.js'

export class MetaManager {

    private _context: Context
    private readonly _battleMeta: BattleMeta
    private readonly _eventMeta: EventMeta
    private readonly _shopMeta: ShopMeta
    private readonly _inventoryMeta: InventoryMeta

    constructor() {
        this._context = Context.START
        this._battleMeta = new BattleMeta()
        this._eventMeta = new EventMeta()
        this._shopMeta = new ShopMeta()
        this._inventoryMeta = new InventoryMeta()
    }

    get context(): Context {
        return this._context
    }

    set context(value: Context) {
        this._context = value
    }

    get battleStatus(): BattleMeta {
        return this._battleMeta
    }

    get shopStatus(): ShopMeta {
        return this._shopMeta
    }

    get eventStatus(): EventMeta {
        return this._eventMeta
    }

    get inventoryStatus(): InventoryMeta {
        return this._inventoryMeta
    }

}
