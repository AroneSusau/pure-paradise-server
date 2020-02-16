import {Character} from '../Character.js'
import {Defaults} from '../../defaults/Defaults.js'
import {MetaManager} from '../meta/MetaManager.js'
import {PointManager} from '../../map/PointManager.js'

export class Player extends Character {
    private _startedGame: Boolean
    private _meta: MetaManager
    private _location: PointManager

    constructor(defaults: Defaults) {
        super();

        defaults.applyPlayerDefaults(this)
    }

    public gameStarted() {
        this._startedGame = true
    }

    get startedGame(): Boolean {
        return this._startedGame
    }

    get meta(): MetaManager {
        return this._meta
    }

    get location(): PointManager {
        return this._location
    }

}
