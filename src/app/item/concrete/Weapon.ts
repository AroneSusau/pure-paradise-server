import {Usable} from '../interface/Usable'
import {Player} from '../../character/concrete/Player'
import {Item} from '../Item'
import {ItemId} from "../../defaults/ItemId";
import {items} from "./ItemsList";

export class Weapon extends Item implements Usable {

    public readonly damage: number

    constructor(id: number, name: string, description: string, price: number, damage: number) {
        super(id, name, description, price)
        this.damage = damage
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
