import {Player} from '../../character/concrete/Player'
import {Engine} from '../Engine'
import {MapManager} from '../../map/MapManager'
import {Context} from '../../defaults/Context'
import {AreaNames} from '../../defaults/AreaNames'
import {MapIds} from '../../defaults/MapIds'
import {Socket} from 'socket.io'
import {Observer} from '../../../server/observer/Observer'
import {E01GirlInVillage} from '../../event/eventlist/E01GirlInVillage'
import {Event} from '../../event/Event'
import {CharacterTypes} from '../../defaults/CharacterTypes'
import {E03PureParadiseEnding} from '../../event/eventlist/E03PureParadiseEnding'
import {E02DyingSoldier} from '../../event/eventlist/E02DyingSoldier'

export class EventEngine extends Engine {

    private events: Map<number, Event>

    constructor(observer: Observer) {
        super(observer)

        this.events = new Map<number, Event>([
            [1, new E01GirlInVillage()],
            [2, new E02DyingSoldier()],
            [3, new E03PureParadiseEnding()]
        ])

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
        const notEnding = eventId !== 3

        if (notEnding) {
            const eventStage = player.meta.eventMeta.stage
            const eventCode = player.meta.eventMeta.code
            const event = this.events.get(eventId)
            const options = event.options.get(eventCode)
            const match = options.has(cmd)

            if (match) {
                const nextCode = options.get(cmd)
                const nextStage = Number.parseInt(nextCode.split("s")[1])
                const nextStory = event.story(nextCode, player)
                const nextOptions = event.options.get(nextCode)
                const finished = event.isFinalStage(nextCode)
                const general = finished ? {text: `Event ${eventId} Finished`} : undefined

                player.meta.eventMeta.updateCode(eventId, nextStage)
                this.eventFinished(player, finished, socket, eventId, eventStage)

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
        } else this.endingAction(cmd, player, socket)
    }

    public onEventMove(player: Player, socket: Socket): void {
        this.events.forEach(event => {
            const localMatch = player.location.local.index === event.location.local.index
            const globalMatch = player.location.global.index === event.location.global.index
            const endingRequirementsMet = this.endingRequirementsCheck(player)
            const notEnding = event.id !== 3

            if (localMatch && globalMatch) {
                if (notEnding || endingRequirementsMet) {
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
                } else this.endingRequirementsFail(player, socket)
            }
        })
    }

    eventFinished(player: Player, finished: boolean, socket: Socket, eventId: number, eventStage: number) {
        if (finished) {
            player.meta.context = Context.FREE_ROAM
            player.location.local.incrementX()
            player.location.local.incrementY()
            player.meta.eventMeta.updateScore(eventId, eventStage)
            player.meta.eventMeta.eventsCompleted.set(eventId, true)
            this._observer.roomMovement({
                players: [{
                    id: player.id,
                    name: player.name,
                    room: player.room,
                    context: player.meta.context.toString(),
                    type: CharacterTypes.PLAYER,
                    location: {
                        local: player.location.local.index,
                        global: player.location.global.index
                    }
                }]
            }, socket)
        }
    }

    endingRequirementsFail(player: Player, socket: Socket): void {
        player.location.local.incrementX()
        player.location.local.incrementY()

        this._observer.endingValidationFail({
            id: socket.id,
            type: 4,
            message: "You need to complete the quests in the other regions before coming here!"
        }, socket)

        this._observer.roomMovement({
            players: [{
                id: player.id,
                name: player.name,
                room: player.room,
                context: player.meta.context.toString(),
                type: CharacterTypes.PLAYER,
                location: {
                    local: player.location.local.index,
                    global: player.location.global.index
                }
            }]
        }, socket)

        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                generalUpdate: false,
                mapUpdate: false,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                error: false
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
            }
        }, socket)
    }

    endingAction(cmd: string, player: Player, socket: Socket) {
        const eventId = 3
        const event = this.events.get(eventId)
        const eventStage = player.meta.eventMeta.stage
        const eventCode = player.meta.eventMeta.code
        const options = event.options.get(eventCode)
        const finalCode = player.meta.eventMeta.total() < 10 ? "e3s1" : 'e3s2'

        const story = event.story(finalCode, player)

        const finished = true

        player.meta.eventMeta.updateCode(eventId, eventStage + 1)
        this.eventFinished(player, finished, socket, eventId, eventStage)

        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                generalUpdate: true,
                mapUpdate: false,
                playerUpdate: false,
                battleUpdate: false,
                eventUpdate: true,
                contextUpdate: finished,
                error: false
            },
            event: {
                flags: {
                    displayUpdate: false
                },
                name: event.name,
                story: story,
                options: options,
            },
            general: {text: `Event ${eventId} Finished`},
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
    }

    endingRequirementsCheck(player: Player): boolean {
        const e1Done = player.meta.eventMeta.eventsCompleted.get(1) || false
        const e2Done = player.meta.eventMeta.eventsCompleted.get(2) || false

        return e1Done && e2Done
    }

}
