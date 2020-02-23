import {InventoryContext} from '../../defaults/InventoryContext.js'
import {ItemId} from '../../defaults/ItemId.js'

export class InventoryMeta {

    private _weapon: ItemId
    private _armour: ItemId
    private _context: InventoryContext

    get weapon(): ItemId {
        return this._weapon
    }

    set weapon(value: ItemId) {
        this._weapon = value
    }

    get armour(): ItemId {
        return this._armour
    }

    set armour(value: ItemId) {
        this._armour = value
    }

    get context(): InventoryContext {
        return this._context
    }

    set context(value: InventoryContext) {
        this._context = value
    }
}
