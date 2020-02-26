export class StatMeta {

    private _damage: number

    public get damage(): number {
        return this._damage
    }

    public set damage(value: number) {
        this._damage = value
    }

    private _isAlive: boolean

    public get isAlive(): boolean {
        return this._isAlive
    }

    public set isAlive(value: boolean) {
        this._isAlive = value
    }

    private _defence: number

    public get defence(): number {
        return this._defence
    }

    public set defence(value: number) {
        this._defence = value
    }

    private _health: number

    public get health(): number {
        return this._health
    }

    public set health(value: number) {
        this._health = value
    }

    private _hunger: number

    public get hunger(): number {
        return this._hunger
    }

    public set hunger(value: number) {
        this._hunger = value
    }

    private _thirst: number

    public get thirst(): number {
        return this._thirst
    }

    public set thirst(value: number) {
        this._thirst = value
    }

    private _money: number

    public get money(): number {
        return this._money
    }

    public set money(value: number) {
        this._money = value
    }

}
