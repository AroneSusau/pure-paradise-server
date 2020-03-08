import {Event} from '../Event'

export class GirlInVillageE01 extends Event {

    constructor() {
        super(14, 13, 1, 0)

        this._display = [
            1
        ]

        this._id = 1
        this._name = "Girl In Village"

        const s0 = new Map()
        s0.set('help', 'e1s1')
        s0.set('run', 'e1s6')
        this._options.set(`e${this._id}s0`, s0)

        const s1 = new Map()
        s1.set('fight', 'e1s2')
        s1.set('run', 'e1s5')
        this._options.set(`e${this._id}s1`, s1)

        const s2 = new Map()
        s2.set('wait', 'e1s3')
        s2.set('strike', 'e1s4')
        this._options.set(`e${this._id}s2`, s2)

        this._endingCodes = [
            "e1s4",
            "e1s3",
            "e1s5",
            "e1s6"
        ]
    }
}
