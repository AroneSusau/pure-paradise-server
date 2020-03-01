import {CharacterTypes} from '../private/app/defaults/CharacterTypes.js'

export type PlayerUpdate = {
    id: string,
    name: string,
    room: string,
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
