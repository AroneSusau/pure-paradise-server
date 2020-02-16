import {InventoryContext} from '../../defaults/InventoryContext.js'

export class InventoryMeta {

    private _weapon: String
    private _armour: String
    private _context: InventoryContext

    constructor() {
        this._weapon = "None"
        this._armour = "None"
        this._context = InventoryContext.CLOSED
    }

    get weapon(): String {
        return this._weapon
    }

    set weapon(value: String) {
        this._weapon = value
    }

    get armour(): String {
        return this._armour
    }

    set armour(value: String) {
        this._armour = value
    }

    get context(): InventoryContext {
        return this._context
    }

    set context(value: InventoryContext) {
        this._context = value
    }
}
