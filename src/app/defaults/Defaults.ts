import {Player} from '../character/concrete/Player'
import {Context} from './Context'
import {InventoryContext} from './InventoryContext'
import {ItemId} from './ItemId'
import {GameMap} from '../map/GameMap'
import {AreaNames} from './AreaNames'
import {ShopContext} from './ShopContext'
import {MapIds} from './MapIds'

export class Defaults {

    private localMapLength: number = 20
    private globalMapLength: number = 2

    public applyPlayerDefaults(player: Player) {

        player.stats.health = 100
        player.stats.hunger = 100
        player.stats.thirst = 100
        player.stats.money = 250

        player.location.local.length = this.localMapLength
        player.location.global.length = this.globalMapLength

        player.location.updateLocalPosition(10, 10)
        player.location.updateGlobalPosition(0, 0)

        player.meta.context = Context.START

        player.meta.inventoryMeta.context = InventoryContext.CLOSED

        player.meta.inventoryMeta.weapon = ItemId.FISTS
        player.meta.inventoryMeta.armour = ItemId.CLOTH_CLOTHING

        player.meta.battleMeta.monsterCount = 0

        player.meta.eventMeta.updateCode(0, 0)

        player.meta.shopMeta.updateShopContext(ShopContext.EXITED)

        player.inventory.setItem(ItemId.BEEF, 1)
        player.inventory.setItem(ItemId.APPLE, 3)
        player.inventory.setItem(ItemId.WATER, 7)
        player.inventory.setItem(ItemId.RUSTED_RAZOR, 1)
        player.inventory.setItem(ItemId.CLOTH_CLOTHING, 1)

    }

    public applyMonsterDefaults(player: Player) {

    }

    public applyShopKeeperDefaults(player: Player) {

    }

    public applyMapDefaults(map: GameMap) {
        switch (map.name) {
            case AreaNames.VENMARK:
                this.mapDefaults(map, 0, 0, MapIds.VEMARK)
                break
            case AreaNames.SILVOS:
                this.mapDefaults(map, 1, 0, MapIds.SILVOS)
                break
            case AreaNames.TIRERA:
                this.mapDefaults(map, 0, 1, MapIds.TIRERA)
                break
            case AreaNames.PURE_PARADISE:
                this.mapDefaults(map, 1, 1, MapIds.PURE_PARADISE)
                break
        }
    }

    public mapDefaults(map: GameMap, x: number, y: number, id: MapIds) {
        map.coords.x = x
        map.coords.y = y
        map.coords.length = this.globalMapLength
        map.localLength = this.localMapLength
        map.id = id
        map.coords.updateIndex()
        map.generateBounds()
    }

}
