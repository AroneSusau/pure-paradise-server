import {Event} from '../Event'

export class E03PureParadiseEnding extends Event {

    constructor() {
        super(10, 14, 1, 1)

        this._display = [
            1
        ]

        this._id = 3
        this._name = "Pure Paradise"
        this._options = new Map<string, Map<string, string>>()

        this._endingCodes = [
            "e3s3"
        ]
    }

}
