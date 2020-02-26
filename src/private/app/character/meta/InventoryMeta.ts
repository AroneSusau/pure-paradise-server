import {InventoryContext} from '../../defaults/InventoryContext.js'
import {ItemId} from '../../defaults/ItemId.js'

export class InventoryMeta {

    private _weapon: ItemId

    get weapon(): ItemId {
        return this._weapon
    }

    set weapon(value: ItemId) {
        this._weapon = value
    }

    private _armour: ItemId

    get armour(): ItemId {
        return this._armour
    }

    set armour(value: ItemId) {
        this._armour = value
    }

    private _context: InventoryContext

    get context(): InventoryContext {
        return this._context
    }

    set context(value: InventoryContext) {
        this._context = value
    }
}
