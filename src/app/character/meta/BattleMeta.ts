export class BattleMeta {

    private _monsterIds: Array<number>

    constructor() {
        this._monsterIds = new Array<number>()
    }

    private _monsterCount: number

    get monsterCount(): number {
        return this._monsterCount
    }

    set monsterCount(value: number) {
        this._monsterCount = value
    }

    public updateMonsterIds(list: Array<number>) {
        this._monsterIds = list
        this._monsterCount = list.length
    }

    public getMonsterIds(index: number): number {
        return this._monsterIds[index]
    }
}
