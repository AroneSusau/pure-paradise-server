import {Character} from '../Character.js'
import {MetaManager} from '../meta/MetaManager.js'
import {PointManager} from '../point/PointManager.js'

export class Player extends Character {

    private _id: string

    constructor(id: string) {
        super()

        this._meta = new MetaManager()
        this._location = new PointManager()
        this._id = id

        this.location.updateGlobalPosition(0, 0)
        this.location.updateLocalPosition(10, 10)


    }

    private _meta: MetaManager

    get meta(): MetaManager {
        return this._meta
    }

    private _location: PointManager

    get location(): PointManager {
        return this._location
    }

    get id(): string {
        return this._id
    }
}
