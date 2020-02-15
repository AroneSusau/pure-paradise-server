export class Item {

    private _id: number
    private _name: string
    private _description: string
    private _price: number
    private _quantity: number

    constructor(id: number, name: string, description: string, price: number, quantity: number = 1) {
        this._id = id
        this._name = name
        this._description = description
        this._price = price
        this._quantity = quantity
    }

    public get quantity(): number {
        return this._quantity
    }

    public get name(): string {
        return this._name
    }

    public get description(): string {
        return this._description
    }

    public get price(): number {
        return this._price
    }

    public get id(): number {
        return this._id
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
