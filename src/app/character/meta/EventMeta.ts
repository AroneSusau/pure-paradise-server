export class EventMeta {

    private _score: Map<number, number>
    private _eventsCompleted: Map<number, boolean>
    private _code: string
    private _id: number
    private _stage: number

    constructor() {
        this._score = new Map<number, number>()
        this._eventsCompleted = new Map<number, boolean>()
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
    
    public total(): number {
        let count = 0
        
        this.score.forEach(v => count += v)

        return count
    }

    get code(): string {
        return this._code
    }

    get id(): number {
        return this._id
    }

    get stage(): number {
        return this._stage
    }

    get score(): Map<number, number> {
        return this._score
    }

    get eventsCompleted(): Map<number, boolean> {
        return this._eventsCompleted
    }
}
