import {Usable} from './abstract/Usable.js'
import {Player} from '../character/concrete/Player.js'
import {Item} from './abstract/Item.js'

export class Weapon extends Item implements Usable {

    protected readonly damage: number

    constructor(id: number, name: string, description: string, price: number, quantity: number, damage: number) {
        super(id, name, description, price, quantity)
        this.damage = damage
    }

    public equip(player: Player): void {
    }

    public unequip(player: Player): void {
    }

}
