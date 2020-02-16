import {Player} from '../../character/concrete/Player.js'

export interface Consumable {

    consume(player: Player): void

}
