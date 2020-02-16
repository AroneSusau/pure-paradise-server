export abstract class Item {

    constructor(id: number, name: string, description: string, price: number, quantity: number = 1) {
        this._id = id
        this._name = name
        this._description = description
        this._price = price
        this._quantity = quantity
    }

    protected _id: number

    public get id(): number {
        return this._id
    }

    protected _name: string

    public get name(): string {
        return this._name
    }

    protected _description: string

    public get description(): string {
        return this._description
    }

    protected _price: number

    public get price(): number {
        return this._price
    }

    protected _quantity: number

    public get quantity(): number {
        return this._quantity
    }

    public increaseQuantity() {
        this._quantity += 1
    }

    public decreaseQuantity() {
        if (this._quantity > 0) {
            this._quantity -= 1
        }
    }

    public last(): boolean {
        return this._quantity == 1
    }

}
