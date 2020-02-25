import {CharacterTypes} from '../private/app/defaults/CharacterTypes.js'
import {MapIds} from '../private/app/defaults/MapIds.js'

export type PlayerJoinedResponse = {
    id: string,
    name: string,
    room: string,
    type: CharacterTypes,
    mapId: MapIds,
    message: string
    location: {
        index: number
    }
}
