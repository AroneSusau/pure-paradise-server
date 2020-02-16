export class Point {

    private _index: number
    private _x: number
    private _y: number = 0
    private readonly length: number = 0

    constructor(x: number, y:number, length: number) {
        this._x = x
        this._y = y
        this.length = length - 1
        this.updateIndex()
    }

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

    public incrementX() {
        this._x += this._x < this.length ? 1 : this._x
    }

    public decremementX() {
        this._x -= this._x > 0 ? 1 : this._x
    }

    public incrementY() {
        this._y += this._y < this.length ? 1 : this._y
    }

    public decremementY() {
        this._y -= this._y > 0 ? 1 : this._y
    }

    public updateIndex() {
        this._index = this._y * this.length + this._x
    }

}
