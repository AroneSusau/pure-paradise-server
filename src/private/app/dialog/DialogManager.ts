import {AreaNames} from '../defaults/AreaNames.js'
import {Player} from '../character/concrete/Player.js'

export class DialogManager {

    [key: string]: (player: Player) => string

    ['e0s0'](player: Player): string {
        const playerName = player.name

        return `It has been 3 weeks since the monsters struck. ${playerName} has been warding off attacks in ${AreaNames.VEMARK} for far too long, and must embark on a journey into the wilderness for more supplies to reach their final point, ${AreaNames.PURE_PARADISE}.\n Guide ${playerName} through the cities of ${AreaNames.NEW_TRETHAM} as you face hordes of the monsters restlessly aiming to stop you on your journey. In order to aid your crusade, ${playerName} is capable of visiting a general store and spending money in order to purchase food and hydration for the journey ahead. In addition to this, the monsters you will face may drop items that will aid you in your journey once slain. \n${playerName} must visit the village elders of the towns ${AreaNames.SILVOS} and ${AreaNames.TIRERA} in order to gain access to the final land, free of all impurities and monsters, ${AreaNames.PURE_PARADISE}. \nAnd remember! When your hunger and thirst fall below 50, your damage and defence will weaken!`
    }

}
