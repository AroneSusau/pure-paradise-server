import {Consumable} from '../interface/Consumable'
import {Player} from '../../character/concrete/Player'
import {Item} from '../Item'
import {FoodType} from "../../defaults/FoodType";

export class Food extends Item implements Consumable {

    public readonly value: number
    public readonly foodType: FoodType

    constructor(id: number, name: string, description: string, price: number, value: number, foodType: FoodType) {
        super(id, name, description, price)
        this.value = value
        this.foodType = foodType
    }

    public consume(player: Player): void {
        let consumed: boolean

        if (this.foodType == FoodType.HUNGER) {
            consumed = player.stats.eat(this.value)
        } else {
            consumed = player.stats.drink(this.value)
        }

        if (consumed) {
            player.inventory.removeItem(this.id)
        }
    }

}
