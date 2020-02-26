import {Point} from './Point.js'

export class PointManager {

    constructor() {
        this._local = new Point()
        this._global = new Point()
    }

    private _local: Point

    public get local(): Point {
        return this._local
    }

    private _global: Point

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
