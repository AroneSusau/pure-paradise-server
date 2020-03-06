import {Usable} from '../interface/Usable'
import {Player} from '../../character/concrete/Player'
import {Item} from '../Item'

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
