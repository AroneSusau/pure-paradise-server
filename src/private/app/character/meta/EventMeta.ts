export class EventMeta {

    private _score: Map<Number, Number>

    constructor() {
        this._id = 0
        this._stage = 0
        this._score = new Map<Number, Number>()
    }

    private _id: number

    get id(): number {
        return this._id
    }

    set id(value: number) {
        this._id = value
    }

    private _stage: number

    get stage(): number {
        return this._stage
    }

    set stage(value: number) {
        this._stage = value
    }

    public updateScore(id: number, score: number) {
        this._score.set(id, score)
    }

    public getScore(id: number) {
        this._score.has(id) ? this._score.get(id) : 0
    }
}
