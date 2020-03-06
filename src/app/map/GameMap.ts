import {AreaNames} from '../defaults/AreaNames'
import {Point} from '../character/point/Point'
import {Bounds} from './Bounds'
import {MapIds} from '../defaults/MapIds'

export abstract class GameMap {

    protected constructor() {
        this._bounds = new Bounds()
    }

    protected _name: AreaNames

    get name(): AreaNames {
        return this._name
    }

    private _localLength: number

    get localLength(): number {
        return this._localLength
    }

    set localLength(value: number) {
        this._localLength = value
    }

    private _id: MapIds

    get id(): MapIds {
        return this._id
    }

    set id(value: MapIds) {
        this._id = value
    }

    protected _raw: Array<number>

    get raw(): Array<number> {
        return this._raw
    }

    protected _coords: Point

    get coords(): Point {
        return this._coords
    }

    private _bounds: Bounds

    get bounds(): Bounds {
        return this._bounds
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
