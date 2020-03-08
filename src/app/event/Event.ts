import {DialogManager} from '../dialog/DialogManager'
import {PointManager} from '../character/point/PointManager'
import {Player} from '../character/concrete/Player'

export abstract class Event {

    protected _id: number
    protected _name: string
    protected _display: Array<number>
    protected _dialog: DialogManager
    protected _location: PointManager
    protected _options: Map<string, Map<string, string>>
    protected _endingCodes: Array<string>

    protected constructor(x1: number, y1: number, x2: number, y2: number) {
        this._location = new PointManager()
        this._options = new Map()
        this._dialog = new DialogManager()

        this.location.local.length = 20
        this.location.global.length = 20
        this._location.updateLocalPosition(x1, y1)
        this._location.updateGlobalPosition(x2, y2)
    }

    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get options(): Map<string, Map<string, string>> {
        return this._options
    }

    get display(): Array<number> {
        return this._display
    }

    get location(): PointManager {
        return this._location
    }

    public story(id: string, player: Player): string {
        return this._dialog[id](player) || ""
    }

    get endingCodes(): Array<string> {
        return this._endingCodes
    }

    public isFinalStage(code: string): boolean {
        return this._endingCodes.includes(code)
    }
}
