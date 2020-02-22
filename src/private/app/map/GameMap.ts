import {AreaNames} from '../defaults/AreaNames.js'
import {Point} from '../character/point/Point.js'

export abstract class GameMap {

    protected _name: AreaNames
    protected _raw: Array<number>
    protected _coords: Point

    get name(): AreaNames {
        return this._name
    }

    get raw(): Array<number> {
        return this._raw
    }

    get coords(): Point {
        return this._coords
    }

}
