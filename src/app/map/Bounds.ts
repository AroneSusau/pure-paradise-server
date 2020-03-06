export class Bounds {

    private _north: boolean

    get north(): boolean {
        return this._north
    }

    private _south: boolean

    get south(): boolean {
        return this._south
    }

    private _east: boolean

    get east(): boolean {
        return this._east
    }

    private _west: boolean

    get west(): boolean {
        return this._west
    }

    private _northMapIndex: number

    get northMapIndex(): number {
        return this._northMapIndex
    }

    private _southMapIndex: number

    get southMapIndex(): number {
        return this._southMapIndex
    }

    private _eastMapIndex: number

    get eastMapIndex(): number {
        return this._eastMapIndex
    }

    private _westMapIndex: number

    get westMapIndex(): number {
        return this._westMapIndex
    }

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
}
