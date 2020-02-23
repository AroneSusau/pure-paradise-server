export class Bounds {

    private _north: boolean
    private _south: boolean
    private _east: boolean
    private _west: boolean

    private _northMapIndex: number
    private _southMapIndex: number
    private _eastMapIndex: number
    private _westMapIndex: number

    public generate(x: number, y: number, index: number, length: number) {
        this._north = y > 0
        this._south = y < length - 1
        this._west = x > 0
        this._east = x < length - 1

        this._northMapIndex = this._north ? index - length : -1
        this._southMapIndex = this._south ? index + length : -1
        this._eastMapIndex = this._east ? index + 1 : -1
        this._westMapIndex = this._west ? index - 1 : -1
    }

    get northMapIndex(): number {
        return this._northMapIndex
    }

    get southMapIndex(): number {
        return this._southMapIndex
    }

    get eastMapIndex(): number {
        return this._eastMapIndex
    }

    get westMapIndex(): number {
        return this._westMapIndex
    }

    get north(): boolean {
        return this._north
    }

    get south(): boolean {
        return this._south
    }

    get east(): boolean {
        return this._east
    }

    get west(): boolean {
        return this._west
    }
}
