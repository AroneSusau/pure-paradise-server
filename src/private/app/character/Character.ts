import {StatMeta} from './meta/StatMeta.js'
import {Inventory} from './inventory/Inventory.js'

export abstract class Character {

    protected _name: string
    protected _stats: StatMeta
    protected _inventory: Inventory

    constructor() {
        this._stats = new StatMeta()
        this._inventory = new Inventory()
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }

    public get stats(): StatMeta {
        return this._stats
    }

    public get inventory(): Inventory {
        return this._inventory
    }

}
