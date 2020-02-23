import {Item} from '../Item.js'
import {Consumable} from '../interface/Consumable.js'
import {Usable} from '../interface/Usable.js'
import {Player} from '../../character/concrete/Player.js'

export class EdibleWeapon extends Item implements Consumable, Usable {

    protected readonly damage: number
    protected readonly value: number


    constructor(id: number, name: string, description: string, price: number, damage: number, value: number) {
        super(id, name, description, price)
        this.damage = damage
        this.value = value
    }

    public consume(player: Player): void {
    }

    public equip(player: Player): void {
    }

    public unequip(player: Player): void {
    }

}
