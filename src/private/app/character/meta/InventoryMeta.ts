import {InventoryContext} from '../../defaults/InventoryContext.js'

export class InventoryMeta {

    constructor() {
        this._weapon = 'None'
        this._armour = 'None'
        this._context = InventoryContext.CLOSED
    }

    private _weapon: String

    get weapon(): String {
        return this._weapon
    }

    set weapon(value: String) {
        this._weapon = value
    }

    private _armour: String

    get armour(): String {
        return this._armour
    }

    set armour(value: String) {
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
