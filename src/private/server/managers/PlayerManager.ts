import {Player} from '../../app/character/concrete/Player.js'
import {Defaults} from '../../app/defaults/Defaults.js'
import {PlayerUpdate} from '../../../types/PlayerUpdate.js'

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

    public currentPlayerPositions(id: string): Array<PlayerUpdate> {
        let list: Array<PlayerUpdate> = []

        this.players.forEach(player => {
            if (player.id != id) {
                if (player.name != undefined) {
                    list.push({
                        id: player.id,
                        name: player.name,
                        localIndex: player.location.local.index,
                        globalIndex: player.location.global.index
                    })
                }
            }
        })

        return list
    }

}
