import {Context} from '../../defaults/Context.js'
import {BattleMeta} from './BattleMeta.js'
import {EventMeta} from './EventMeta.js'
import {ShopMeta} from './ShopMeta.js'
import {InventoryMeta} from './InventoryMeta.js'

export class MetaManager {

    private _context: Context
    private _battleStatus: BattleMeta
    private _eventStatus: EventMeta
    private _shopStatus: ShopMeta
    private _inventoryStatus: InventoryMeta

    get context(): Context {
        return this._context
    }

    set context(value: Context) {
        this._context = value
    }

    get battleStatus(): BattleMeta {
        return this._battleStatus
    }

    get shopStatus(): ShopMeta {
        return this._shopStatus
    }

    get eventStatus(): EventMeta {
        return this._eventStatus
    }

    get inventoryStatus(): InventoryMeta {
        return this._inventoryStatus
    }

}
