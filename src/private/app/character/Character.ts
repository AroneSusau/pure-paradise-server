import {Stats} from './Stats.js'
import {Inventory} from '../inventory/Inventory.js'

export class Character {

    private _name: String
    private _stats: Stats
    private _inventory: Inventory

    public get name(): String {
        return this._name
    }

    public set name(value: String) {
        this._name = value
    }

    public get stats(): Stats {
        return this._stats
    }

    public get inventory(): Inventory {
        return this._inventory
    }

}
