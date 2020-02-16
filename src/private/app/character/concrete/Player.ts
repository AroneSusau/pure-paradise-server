import {Character} from '../Character.js'
import {Defaults} from '../../defaults/Defaults.js'
import {MetaManager} from '../meta/MetaManager.js'
import {PointManager} from '../../map/PointManager.js'

export class Player extends Character {
    private _meta: MetaManager
    private _location: PointManager
    private _id: string

    constructor(id: string, defaults: Defaults) {
        super()

        this._meta = new MetaManager()
        this._location = new PointManager()
        this._id = id

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
