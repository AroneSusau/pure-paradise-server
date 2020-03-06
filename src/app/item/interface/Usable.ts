import {Player} from '../../character/concrete/Player'

export interface Usable {

    equip(player: Player): void

    unequip(player: Player): void

}
