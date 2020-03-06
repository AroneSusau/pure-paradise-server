import {Player} from '../../character/concrete/Player'

export interface Consumable {

    consume(player: Player): void

}
