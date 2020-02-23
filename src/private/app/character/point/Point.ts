export class Point {

    private readonly length: number = 0

    constructor(x: number, y: number, length: number) {
        this._x = x
        this._y = y
        this.length = length
        this.updateIndex()
    }

    private _index: number

    public get index(): number {
        return this._index
    }

    private _x: number

    public get x(): number {
        return this._x
    }

    public set x(value: number) {
        this._x = value
    }

    private _y: number = 0

    public get y(): number {
        return this._y
    }

    public set y(value: number) {
        this._y = value
    }

    public incrementX() {
        this._x += this._x < this.length - 1 ? 1 : 0
        this.updateIndex()
    }

    public decremementX() {
        this._x -= this._x > 0 ? 1 : 0
        this.updateIndex()
    }

    public incrementY() {
        this._y += this._y < this.length - 1 ? 1 : 0
        this.updateIndex()
    }

    public decremementY() {
        this._y -= this._y > 0 ? 1 : 0
        this.updateIndex()
    }

    public updateIndex() {
        this._index = (this._y * this.length + this._x)
    }

}
