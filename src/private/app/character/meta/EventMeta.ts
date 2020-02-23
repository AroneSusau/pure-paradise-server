export class EventMeta {

    private _score: Map<Number, Number>

    private _code: string
    private _id: number
    private _stage: number

    constructor() {
        this._score = new Map<Number, Number>()
    }

    public updateCode(id: number, stage: number) {
        this._id = id
        this._stage = stage
        this._code = `e${this._id}s${this._stage}`
    }

    public updateScore(id: number, score: number) {
        this._score.set(id, score)
    }

    public getScore(id: number) {
        this._score.has(id) ? this._score.get(id) : 0
    }
}
