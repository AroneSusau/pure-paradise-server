import {Usable} from './abstract/Usable.js'
import {Player} from '../character/concrete/Player.js'
import {Item} from './abstract/Item.js'

export class Armour extends Item implements Usable {

    protected readonly defence: number

    constructor(id: number, name: string, description: string, price: number, quantity: number, defence: number) {
        super(id, name, description, price, quantity)
        this.defence = defence
    }

    public equip(player: Player): void {
    }

    public unequip(player: Player): void {
    }

}
