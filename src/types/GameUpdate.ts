import {Context} from '../private/app/defaults/Context.js'
import {Item} from '../private/app/item/Item.js'
import {Monster} from '../private/app/character/concrete/Monster.js'
import {MapIds} from '../private/app/defaults/MapIds.js'

export type Flags = {
    mapUpdate: boolean,
    playerUpdate: boolean,
    battleUpdate: boolean,
    eventUpdate: boolean,
    contextUpdate: boolean,
    generalUpdate: boolean,
    error: boolean
}

export type Map = {
    id: MapIds
    name: string,
    raw: Array<number>
}

export type PlayerInfo = {
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
        local: number,
        global: number,
    }
}

export type Battle = {
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
}

export type Event = {
    flags: {
        displayUpdate: symbol
    },
    name: string,
    story: string,
    options: Array<string>,
    display: Array<number>
}

export type GameUpdate = {
    id: string,
    room: string,
    flags: Flags,
    general?: { text: string },
    map?: Map,
    player?: PlayerInfo,
    battle?: Battle,
    event?: Event
    error?: { message: string }
}
