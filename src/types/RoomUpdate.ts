import {CharacterTypes} from '../app/defaults/CharacterTypes'

export type PlayerUpdate = {
    id: string,
    name: string,
    room: string,
    context: string,
    type: CharacterTypes,
    location: {
        local: number,
        global: number
    }
}

export type RoomUpdate = {
    room?: string
    count?: number
    message?: string
    players?: Array<PlayerUpdate>
}
