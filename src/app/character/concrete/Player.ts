import {Character} from '../Character.js'
import {MetaManager} from '../meta/MetaManager.js'
import {PointManager} from '../point/PointManager.js'
import {Defaults} from '../../defaults/Defaults.js'

export class Player extends Character {

    private readonly _id: string
    private readonly _room: string
    private readonly _location: PointManager
    private readonly _meta: MetaManager

    constructor(id: string, room: string, defaults: Defaults) {
        super()

        this._id = id
        this._room = room

        this._meta = new MetaManager()
        this._location = new PointManager()

        defaults.applyPlayerDefaults(this)
    }

    get room(): string {
        return this._room
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
