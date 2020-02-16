import {Player} from '../../character/concrete/Player.js'

export interface Usable {

    equip(player: Player): void

    unequip(player: Player): void

}
