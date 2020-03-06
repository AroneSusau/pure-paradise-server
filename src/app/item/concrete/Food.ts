import {Consumable} from '../interface/Consumable'
import {Player} from '../../character/concrete/Player'
import {Item} from '../Item'

export class Food extends Item implements Consumable {

    protected readonly value: number

    constructor(id: number, name: string, description: string, price: number, value: number) {
        super(id, name, description, price)
        this.value = value
    }

    public consume(player: Player): void {
    }

}
