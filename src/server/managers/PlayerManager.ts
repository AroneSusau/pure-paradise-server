import {Player} from '../../app/character/concrete/Player'
import {Defaults} from '../../app/defaults/Defaults'
import {PlayerUpdate} from '../../types/RoomUpdate'
import {CharacterTypes} from '../../app/defaults/CharacterTypes'

export class PlayerManager {

    private players: Map<string, Player>
    private defaults = new Defaults()

    constructor() {
        this.players = new Map<string, Player>()
    }

    public add(id: string, room: string) {
        this.players.set(id, new Player(id, room, this.defaults))
    }

    public get(id: string): Player {
        return this.players.get(id)
    }

    public remove(id: string) {
        this.players.delete(id)
    }

    public has(id: string): boolean {
        return this.players.has(id)
    }

    public size(room: string): number {
        let size = 0

        this.players.forEach(player => {
            size += player.room === room ? 1 : 0
        })

        return size
    }

    public getAllPlayerUpdates(id: string, room: string): Array<PlayerUpdate> {
        return Array.from(this.players)
            .filter((args: [string, Player]) => {
                return (args[1].id !== id &&
                    args[1].name &&
                    args[1].room === room)
            })
            .map((args: [string, Player]) => {
                const player = args[1]
                return this.getPlayerUpdate(player)
            })
    }

    public getPlayerUpdate(player: Player): PlayerUpdate {
        return {
            id: player.id,
            name: player.name,
            room: player.room,
            type: CharacterTypes.PLAYER,
            location: {
                local: player.location.local.index,
                global: player.location.global.index
            }
        }
    }

}
