import {Character} from '../Character.js'
import {MetaManager} from '../meta/MetaManager.js'
import {PointManager} from '../point/PointManager.js'
import {Defaults} from '../../defaults/Defaults.js'

export class Player extends Character {

    private _id: string
    private _location: PointManager
    private _meta: MetaManager

    constructor(id: string, defaults: Defaults) {
        super()

        this._id = id

        this._meta = new MetaManager()
        this._location = new PointManager()

        defaults.applyPlayerDefaults(this)
    }

    get meta(): MetaManager {
        return this._meta
    }

    get location(): PointManager {
        return this._location
    }

    get id(): string {
        return this._id
    }
}
