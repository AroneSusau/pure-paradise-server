import {Event} from '../Event'

export class E01GirlInVillage extends Event {

    constructor() {
        super(14, 13, 1, 0)

        this._display = [
            1
        ]

        this._id = 1
        this._name = "Girl In Village"

        this._options = new Map<string, Map<string, string>>([
            [`e${this._id}s0`, new Map<string, string>([
                ['help', 'e1s1'],
                ['run', 'e1s6']
            ])],
            [`e${this._id}s1`, new Map<string, string>([
                ['fight', 'e1s2'],
                ['run', 'e1s5']
            ])],
            [`e${this._id}s2`, new Map<string, string>([
                ['wait', 'e1s3'],
                ['strike', 'e1s4']
            ])]
        ])

        this._endingCodes = [
            "e1s4",
            "e1s3",
            "e1s5",
            "e1s6"
        ]
    }
}
