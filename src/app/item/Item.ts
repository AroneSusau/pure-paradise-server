export abstract class Item {

    protected _id: number
    protected _name: string
    protected _description: string
    protected _price: number

    protected constructor(id: number, name: string, description: string, price: number) {
        this._id = id
        this._name = name
        this._description = description
        this._price = price
    }

    public get id(): number {
        return this._id
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

}
