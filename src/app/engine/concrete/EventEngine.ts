import {Player} from '../../character/concrete/Player'
import {Engine} from '../Engine'
import {MapManager} from '../../map/MapManager'
import {Context} from '../../defaults/Context'
import {AreaNames} from '../../defaults/AreaNames'
import {MapIds} from '../../defaults/MapIds'
import {Socket} from 'socket.io'
import {Observer} from '../../../server/observer/Observer'
import {GirlInVillageE01} from '../../event/eventlist/GirlInVillageE01'
import {Event} from '../../event/Event'
import {text} from 'express'

export class EventEngine extends Engine {

    private events: Map<number, Event>

    constructor(observer: Observer) {
        super(observer)

        this.events = new Map<number, Event>()

        this.events.set(1, new GirlInVillageE01())
    }

    public start(cmd: string, player: Player, socket: Socket): void {
        player.name = cmd
        player.meta.context = Context.FREE_ROAM
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: true,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: true,
                generalUpdate: true,
                error: false
            },
            player: {
                name: player.name,
                context: Context.FREE_ROAM,
                flags: {
                    inventoryUpdate: false,
                    equippedUpdate: false,
                    statsUpdate: false,
                    coordsUpdate: true
                },
                coords: {
                    local: player.location.local.index,
                    global: player.location.global.index
                }
            },
            general: {
                text: this.dialogManager['e0s0'](player)
            },
            map: {
                id: MapIds.VEMARK,
                name: AreaNames.VENMARK,
                raw: MapManager.maps.get(MapIds.VEMARK).raw
            }
        }, socket)
    }

    public action(cmd: string, player: Player, socket: Socket): void {
        const eventId = player.meta.eventMeta.id
        const eventStage = player.meta.eventMeta.stage
        const eventCode = player.meta.eventMeta.code
        const event = this.events.get(eventId)
        const options = event.options.get(eventCode)
        const match = options.has(cmd)

        if (match) {
            const nextCode = options.get(cmd)
            const nextStory = event.story(nextCode, player)
            const nextOptions = event.options.get(nextCode)
            const finished = event.isFinalStage(nextCode)

            let general

            player.meta.eventMeta.updateCode(eventId, eventStage + 1)

            if (finished) {
                player.meta.context = Context.FREE_ROAM
                player.location.local.incrementX()
                player.location.local.incrementY()
                player.meta.eventMeta.updateScore(eventId, eventStage)
                general = { text: `Event ${eventId} Finished` }
            }

            this._observer.notify({
                id: player.id,
                room: player.room,
                flags: {
                    mapUpdate: false,
                    playerUpdate: false,
                    battleUpdate: false,
                    eventUpdate: true,
                    contextUpdate: finished,
                    generalUpdate: false,
                    error: false
                },
                event: {
                    flags: {
                        displayUpdate: false
                    },
                    name: event.name,
                    story: nextStory,
                    options: nextOptions,
                },
                general,
                player: {
                    flags: {
                        inventoryUpdate: false,
                        equippedUpdate: false,
                        statsUpdate: false,
                        coordsUpdate: true
                    },
                    coords: {
                        local: player.location.local.index,
                        global: player.location.global.index
                    },
                    name: player.name,
                    context: player.meta.context
                }
            }, socket)
        } else this.invalidAction(cmd, player, socket)
    }

    public onEventMove(player: Player, socket: Socket): void {
        this.events.forEach(event => {
            const localMatch = player.location.local.index === event.location.local.index
            const globalMatch = player.location.global.index === event.location.global.index

            if (localMatch && globalMatch) {
                player.meta.context = Context.EVENT
                player.meta.eventMeta.updateCode(event.id, 0)

                this._observer.notify({
                    id: player.id,
                    room: player.room,
                    flags: {
                        generalUpdate: false,
                        mapUpdate: false,
                        playerUpdate: true,
                        battleUpdate: false,
                        eventUpdate: true,
                        contextUpdate: true,
                        error: false
                    },
                    general: {
                        text: `Event Started - ${event.name}`
                    },
                    player: {
                        flags: {
                            inventoryUpdate: false,
                            equippedUpdate: false,
                            statsUpdate: false,
                            coordsUpdate: true
                        },
                        coords: {
                            local: player.location.local.index,
                            global: player.location.global.index
                        },
                        name: player.name,
                        context: player.meta.context
                    },
                    event: {
                        flags: {
                            displayUpdate: true
                        },
                        name: event.name,
                        story: event.story(player.meta.eventMeta.code, player),
                        options: event.options.get(player.meta.eventMeta.code),
                        display: event.display
                    }
                }, socket)
            }
        })
    }

}
