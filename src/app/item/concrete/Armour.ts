import {Usable} from '../interface/Usable.js'
import {Player} from '../../character/concrete/Player.js'
import {Item} from '../Item.js'

export class Armour extends Item implements Usable {

    protected readonly defence: number

    constructor(id: number, name: string, description: string, price: number, defence: number) {
        super(id, name, description, price)
        this.defence = defence
    }

    public equip(player: Player): void {
    }

    public unequip(player: Player): void {
    }

}
