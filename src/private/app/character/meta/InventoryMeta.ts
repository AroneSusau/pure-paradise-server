export class InventoryMeta {

    private _weapon: String
    private _armour: String

    constructor() {
        this._weapon = "None"
        this._armour = "None"
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
}
