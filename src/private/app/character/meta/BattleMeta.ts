export class BattleMeta {

    private _monsterCount: number
    private _monsterIds: Array<number>

    constructor() {
        this._monsterCount = 0
        this._monsterIds = new Array<number>()
    }

    public updateMonsterIds(list: Array<number>) {
        this._monsterIds = list
        this._monsterCount = list.length
    }

    public getMonsterIds(index: number): number {
        return this._monsterIds[index]
    }

    get monsterCount(): number {
        return this._monsterCount
    }
}
