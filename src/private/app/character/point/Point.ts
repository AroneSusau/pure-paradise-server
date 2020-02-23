export class Point {

    private _length: number
    private _index: number
    private _x: number
    private _y: number

    public get index(): number {
        return this._index
    }

    get length(): number {
        return this._length
    }

    set length(value: number) {
        this._length = value
    }

    public get x(): number {
        return this._x
    }

    public set x(value: number) {
        this._x = value
    }

    public get y(): number {
        return this._y
    }

    public set y(value: number) {
        this._y = value
    }

    public incrementX() {
        this._x += this._x < this._length - 1 ? 1 : 0
        this.updateIndex()
    }

    public decremementX() {
        this._x -= this._x > 0 ? 1 : 0
        this.updateIndex()
    }

    public incrementY() {
        this._y += this._y < this._length - 1 ? 1 : 0
        this.updateIndex()
    }

    public decremementY() {
        this._y -= this._y > 0 ? 1 : 0
        this.updateIndex()
    }

    public updateIndex() {
        this._index = (this._y * this._length) + this._x
    }

}
