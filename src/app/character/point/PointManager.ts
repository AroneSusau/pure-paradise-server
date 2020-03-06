import {Point} from './Point'

export class PointManager {

    private readonly _local: Point
    private readonly _global: Point

    constructor() {
        this._local = new Point()
        this._global = new Point()
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
