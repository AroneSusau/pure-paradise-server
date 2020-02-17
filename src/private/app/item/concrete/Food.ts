import {Consumable} from '../interface/Consumable.js'
import {Player} from '../../character/concrete/Player.js'
import {Item} from '../Item.js'

export class Food extends Item implements Consumable {

    protected readonly value: number

    constructor(id: number, name: string, description: string, price: number, quantity: number, value: number) {
        super(id, name, description, price, quantity)
        this.value = value
    }

    public consume(player: Player): void {
    }

}
