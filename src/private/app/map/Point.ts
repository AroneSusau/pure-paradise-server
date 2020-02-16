export class Point {

    private _index: number
    private _x: number
    private _y: number = 0

    public get index(): number {
        return this._index
    }

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }

    public set x(value: number) {
        this._x = value
    }

    public set y(value: number) {
        this._y = value
    }

    public updateIndex() {
        this._index = (this._x * this._y) - 1
    }

}
