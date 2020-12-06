import {Usable} from '../interface/Usable'
import {Player} from '../../character/concrete/Player'
import {Item} from '../Item'
import {ItemId} from "../../defaults/ItemId";
import {items} from "./ItemsList";

export class Armour extends Item implements Usable {

    public readonly defence: number

    constructor(id: number, name: string, description: string, price: number, defence: number) {
        super(id, name, description, price)
        this.defence = defence
    }

    public equip(player: Player): void {
        player.meta.inventoryMeta.armour = this.id
        player.stats.defence = this.defence
    }

    public unequip(player: Player): void {
        player.meta.inventoryMeta.armour = ItemId.CLOTH_CLOTHING
        player.stats.defence = (items.get(ItemId.CLOTH_CLOTHING) as Armour).defence
    }

}
