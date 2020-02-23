import {AreaNames} from '../defaults/AreaNames.js'
import {Point} from '../character/point/Point.js'
import {Bounds} from './Bounds.js'
import {MapIds} from '../defaults/MapIds.js'

export abstract class GameMap {

    protected _name: AreaNames
    private _localLength: number
    private _id: MapIds
    protected _raw: Array<number>
    protected _coords: Point
    private _bounds: Bounds

    protected constructor() {
        this._bounds = new Bounds()
    }

    get name(): AreaNames {
        return this._name
    }

    get raw(): Array<number> {
        return this._raw
    }

    get coords(): Point {
        return this._coords
    }

    get id(): MapIds {
        return this._id
    }

    set id(value: MapIds) {
        this._id = value
    }

    get bounds(): Bounds {
        return this._bounds
    }

    get localLength(): number {
        return this._localLength
    }

    set localLength(value: number) {
        this._localLength = value
    }

    public generateBounds() {
        this._bounds.generate(
            this.coords.x,
            this.coords.y,
            this.coords.index,
            this.coords.length
        )
    }

}
