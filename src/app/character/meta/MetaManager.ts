import {Context} from '../../defaults/Context'
import {BattleMeta} from './BattleMeta'
import {EventMeta} from './EventMeta'
import {ShopMeta} from './ShopMeta'
import {InventoryMeta} from './InventoryMeta'

export class MetaManager {

    private readonly _battleMeta: BattleMeta
    private readonly _eventMeta: EventMeta
    private readonly _shopMeta: ShopMeta
    private readonly _inventoryMeta: InventoryMeta

    constructor() {
        this._battleMeta = new BattleMeta()
        this._eventMeta = new EventMeta()
        this._shopMeta = new ShopMeta()
        this._inventoryMeta = new InventoryMeta()
    }

    private _context: Context

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
