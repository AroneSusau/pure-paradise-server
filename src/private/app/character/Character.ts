import {StatMeta} from './meta/StatMeta.js'
import {Inventory} from './inventory/Inventory.js'

export abstract class Character {

    constructor() {
        this._stats = new StatMeta()
        this._inventory = new Inventory()
    }

    protected _name: string

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }

    protected _stats: StatMeta

    public get stats(): StatMeta {
        return this._stats
    }

    protected _inventory: Inventory

    public get inventory(): Inventory {
        return this._inventory
    }

}
