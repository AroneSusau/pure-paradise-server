export abstract class Item {

    constructor(id: number, name: string, description: string, price: number) {
        this._id = id
        this._name = name
        this._description = description
        this._price = price
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

}
