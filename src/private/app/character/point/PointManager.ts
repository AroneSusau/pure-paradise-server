import {Point} from './Point.js'

export class PointManager {

    private _local: Point
    private _global: Point

    constructor() {
        this._local = new Point(0, 0, 20)
        this._global = new Point(0, 0, 20)
    }

    public get local(): Point {
        return this._local
    }

    public get global(): Point {
        return this._global
    }

    public updateLocalPosition(x: number, y: number) {
        this._local.x = x
        this._local.y = y
        this._local.updateIndex()
    }

    public updateGlobalPosition(x: number, y: number) {
        this._global.x = x
        this._global.y = y
        this._global.updateIndex()
    }

}
