import {Engine} from '../Engine'
import {Player} from '../../character/concrete/Player'
import {Command} from '../../defaults/Command'
import {MapManager} from '../../map/MapManager'
import {GameMap} from '../../map/GameMap'
import {CharacterTypes} from '../../defaults/CharacterTypes'
import {Socket} from 'socket.io'

export class MapEngine extends Engine {

    public action(cmd: string, player: Player, socket: Socket): void {
        const mapSwitch = this.globalBoundsCheck(cmd, player, socket)

        switch (cmd) {
            case Command.W:
                player.location.local.decremementY()
                break
            case Command.A:
                player.location.local.decremementX()
                break
            case Command.S:
                player.location.local.incrementY()
                break
            case Command.D:
                player.location.local.incrementX()
                break
        }
        mapSwitch ?
            this.movePlayerGlobally(player, socket) :
            this.movePlayerLocally(player, socket)

        this.roomMovement(player, socket)
    }

    public globalBoundsCheck(cmd: string, player: Player, socket: Socket): boolean {
        const playerLocalX: number = player.location.local.x
        const playerLocalY: number = player.location.local.y
        const playerGlobalX: number = player.location.global.x
        const playerGlobalY: number = player.location.global.y
        const currentMap: GameMap = MapManager.maps.get(player.location.global.index)
        const currentMapLength: number = player.location.local.length

        // Move North
        if (cmd === Command.W && playerLocalY === 0) {
            if (currentMap.bounds.north) {
                player.location.updateLocalPosition(playerLocalX, currentMapLength)
                player.location.updateGlobalPosition(playerGlobalX, playerGlobalY - 1)
                return true
            } else this.outOfBounds(player, socket)
        }

        // Move South
        if (cmd === Command.S && playerLocalY === currentMapLength - 1) {
            if (currentMap.bounds.south) {
                player.location.updateLocalPosition(playerLocalX, -1)
                player.location.updateGlobalPosition(playerGlobalX, playerGlobalY + 1)
                return true
            } else this.outOfBounds(player, socket)
        }

        // Move East
        if (cmd === Command.D && playerLocalX === currentMapLength - 1) {
            if (currentMap.bounds.east) {
                player.location.updateLocalPosition(-1, playerLocalY)
                player.location.updateGlobalPosition(playerGlobalX + 1, playerGlobalY)
                return true
            } else this.outOfBounds(player, socket)
        }

        // Move West
        if (cmd === Command.A && playerLocalX === 0) {
            if (currentMap.bounds.west) {
                player.location.updateLocalPosition(currentMapLength, playerLocalY)
                player.location.updateGlobalPosition(playerGlobalX - 1, playerGlobalY)
                return true
            } else this.outOfBounds(player, socket)
        }
        return false
    }

    public outOfBounds(player: Player, socket: Socket) {
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: false,
                playerUpdate: false,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: true,
                error: false
            },
            general: {
                text: 'You can\'t go any farther out!'
            }
        }, socket)
    }

    public movePlayerGlobally(player: Player, socket: Socket) {
        const playerGlobalIndex = player.location.global.index
        const map = MapManager.maps.get(playerGlobalIndex)

        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: true,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: true,
                error: false
            },
            general: {
                text: `You have now entered ${map.name}`
            },
            map: {
                id: map.id,
                name: map.name,
                raw: map.raw
            },
            player: {
                name: player.name,
                context: player.meta.context,
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
            }
        }, socket)
    }

    public movePlayerLocally(player: Player, socket: Socket) {
        this._observer.notify({
            id: player.id,
            room: player.room,
            flags: {
                mapUpdate: false,
                playerUpdate: true,
                battleUpdate: false,
                eventUpdate: false,
                contextUpdate: false,
                generalUpdate: false,
                error: false
            },
            player: {
                name: player.name,
                context: player.meta.context,
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
            }
        }, socket)
    }

    public roomMovement(player: Player, socket: Socket) {
        this._observer.roomMovement({
            room: player.room,
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


