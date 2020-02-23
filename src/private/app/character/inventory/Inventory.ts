import {ItemId} from '../../defaults/ItemId.js'

export class Inventory {

    private _items: Map<ItemId, number>

    constructor() {
        this._items = new Map<ItemId, number>()
    }

    public itemQuantity(id: ItemId): number {
        return this.hasItem(id) ? this._items.get(id) : 0
    }

    public hasItem(id: ItemId): boolean {
        return this._items.has(id)
    }

    public setItem(id: ItemId, qty: number) {
        this._items.set(id, qty)
    }

    public addItem(id: ItemId): number {
        if (this.hasItem(id)) {
            const currentQty = this._items.get(id)
            this._items.set(id, currentQty + 1)
        } else this._items.set(id, 1)

        return this.itemQuantity(id)
    }

    public removeItem(id: ItemId): number {
        if (this.hasItem(id)) {
            const currentQty = this._items.get(id)

            if (currentQty > 1) {
                this._items.set(id, currentQty - 1)
                return this.itemQuantity(id)
            }
        }
        return 0
    }

}
