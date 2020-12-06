import {Item} from '../Item'
import {Consumable} from '../interface/Consumable'
import {Usable} from '../interface/Usable'
import {Player} from '../../character/concrete/Player'
import {FoodType} from "../../defaults/FoodType";
import {ItemId} from "../../defaults/ItemId";
import {items} from "./ItemsList";
import {Weapon} from "./Weapon";

export class EdibleWeapon extends Item implements Consumable, Usable {

    public readonly damage: number
    public readonly value: number
    public readonly foodType: FoodType

    constructor(id: number, name: string, description: string, price: number, damage: number, value: number, foodType: FoodType) {
        super(id, name, description, price)
        this.damage = damage
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

    public equip(player: Player): void {
        player.meta.inventoryMeta.weapon = this.id
        player.stats.damage = this.damage
    }

    public unequip(player: Player): void {
        player.meta.inventoryMeta.weapon = ItemId.FISTS
        player.stats.damage = (items.get(ItemId.FISTS) as Weapon).damage
    }



}
