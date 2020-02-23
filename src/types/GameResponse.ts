import {Context} from '../private/app/defaults/Context.js'
import {Item} from '../private/app/item/Item.js'
import {Monster} from '../private/app/character/concrete/Monster.js'
import {MapIds} from '../private/app/defaults/MapIds.js'

export type GameResponse = {
    id: string,
    flags: {
        mapUpdate: boolean,
        playerUpdate: boolean,
        battleUpdate: boolean,
        eventUpdate: boolean,
        contextUpdate: boolean,
        generalUpdate: boolean,
        error: boolean
    },
    general?: {
        text: string

    },
    map?: {
        id: MapIds
        name: string,
        raw: Array<number>
    },
    player?: {
        flags: {
            inventoryUpdate: boolean,
            equippedUpdate: boolean,
            statsUpdate: boolean,
            coordsUpdate: boolean
        },
        name: string,
        context: Context,
        inventory?: {
            itemCount: number,
            empty: boolean,
            items: Array<Item>
        },
        equipped?: {
            weapon: {
                name: string,
                id: number,
                damage: number
            },
            armor: {
                name: string
                id: number,
                defence: number
            }
        },
        stats?: {
            health: number,
            hunger: number,
            thirst: number,
            gold: number
        },
        coords?: {
            localIndex: number,
            globalIndex: number,
        }
    },
    battle?: {
        flags: {
            startUpdate: boolean,
            endUpdate: boolean
        },
        monsterCount?: number,
        monsters?: Array<Monster>,
        result?: {
            healthDelta: number,
            goldDelta: number
        }
    },
    event?: {
        flags: {
            displayUpdate: symbol
        },
        name: string,
        story: string,
        options: Array<string>,
        display: Array<number>
    }
    error?: {
        message: string
    }
}
