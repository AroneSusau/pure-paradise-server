export class EventMeta {

    private _id: number
    private _stage: number
    private _score: Map<Number, Number>

    constructor() {
        this._id = 0
        this._stage = 0
        this._score = new Map<Number, Number>()
    }

    public updateScore(id: number, score: number) {
        this._score.set(id, score)
    }

    public getScore(id: number) {
        this._score.has(id) ? this._score.get(id) : 0
    }

    get id(): number {
        return this._id
    }

    get stage(): number {
        return this._stage
    }

    set id(value: number) {
        this._id = value
    }

    set stage(value: number) {
        this._stage = value
    }
}
