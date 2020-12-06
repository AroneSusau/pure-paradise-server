export class StatMeta {

    private _damage: number
    private _defence: number
    private _isAlive: boolean
    private _health: number
    private _hunger: number
    private _thirst: number
    private _money: number

    public eat(value: number): boolean {
        let stillHungry: boolean = this.hunger < 100

        if (stillHungry) {
            this.hunger += value
            this.hunger = this.hunger > 100 ? 100 : this.hunger
        }

        return stillHungry
    }

    public drink(value: number): boolean {
        let stillThirsty: boolean = this.thirst < 100

        if (stillThirsty) {
            this.thirst += value
            this.thirst = this.thirst > 100 ? 100 : this.thirst
        }

        return stillThirsty
    }

    public get damage(): number {
        return this._damage
    }

    public set damage(value: number) {
        this._damage = value
    }

    public get isAlive(): boolean {
        return this._isAlive
    }

    public set isAlive(value: boolean) {
        this._isAlive = value
    }

    public get defence(): number {
        return this._defence
    }

    public set defence(value: number) {
        this._defence = value
    }

    public get health(): number {
        return this._health
    }

    public set health(value: number) {
        this._health = value
    }

    public get hunger(): number {
        return this._hunger
    }

    public set hunger(value: number) {
        this._hunger = value
    }

    public get thirst(): number {
        return this._thirst
    }

    public set thirst(value: number) {
        this._thirst = value
    }

    public get money(): number {
        return this._money
    }

    public set money(value: number) {
        this._money = value
    }

}
