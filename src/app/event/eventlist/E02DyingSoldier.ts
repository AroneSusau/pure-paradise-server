import {Event} from '../Event'

export class E02DyingSoldier extends Event {

    constructor() {
        super(5, 7, 0, 1)

        this._display = [
            1
        ]

        this._id = 2
        this._name = "Dying Soldier"

        this._options = new Map<string, Map<string, string>>([
            [`e${this._id}s0`, new Map<string, string>([
                ['kill', 'e2s1'],
                ['leave', 'e2s6']
            ])],
            [`e${this._id}s1`, new Map<string, string>([
                ['fight', 'e2s2'],
                ['convince', 'e2s5']
            ])],
            [`e${this._id}s2`, new Map<string, string>([
                ['squash', 'e2s3'],
                ['spare', 'e2s4']
            ])],
            [`e${this._id}s6`, new Map<string, string>([
                ['leave', 'e2s7'],
                ['attack', 'e2s8']
            ])]

        ])

        this._endingCodes = [
            "e2s3",
            "e2s4",
            "e2s5",
            "e2s7",
            "e2s8"
        ]
    }
}
