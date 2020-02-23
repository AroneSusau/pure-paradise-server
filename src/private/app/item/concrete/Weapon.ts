import {Usable} from '../interface/Usable.js'
import {Player} from '../../character/concrete/Player.js'
import {Item} from '../Item.js'

export class Weapon extends Item implements Usable {

    protected readonly damage: number

    constructor(id: number, name: string, description: string, price: number, damage: number) {
        super(id, name, description, price)
        this.damage = damage
    }

    public equip(player: Player): void {
    }

    public unequip(player: Player): void {
    }

}
