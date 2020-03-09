import {AreaNames} from '../defaults/AreaNames'
import {Player} from '../character/concrete/Player'
import {items} from '../item/concrete/ItemsList'

export class DialogManager {

    [key: string]: (player: Player) => string

    // EVENT 0 - START

    ['e0s0'](player: Player): string {
        const playerName = player.name

        return `It has been 3 weeks since the monsters struck. ${playerName} has been warding off attacks in ${AreaNames.VENMARK} for far too long, and must embark on a journey into the wilderness for more supplies to reach their final point, ${AreaNames.PURE_PARADISE}.<br><br>Guide ${playerName} through the cities of ${AreaNames.NEW_TRETHAM} as you face hordes of the monsters restlessly aiming to stop you on your journey. In order to aid your crusade, ${playerName} is capable of visiting a general store and spending money in order to purchase food and hydration for the journey ahead. In addition to this, the monsters you will face may drop items that will aid you in your journey once slain.<br><br>${playerName} must visit the village elders of the towns ${AreaNames.SILVOS} and ${AreaNames.TIRERA} in order to gain access to the final land, free of all impurities and monsters, ${AreaNames.PURE_PARADISE}.<br><br>And remember! When your hunger and thirst fall below 50, your damage and defence will weaken!`
    }

    // EVENT 1 - GIRL IN VILLAGE

    ['e1s0'](player: Player): string {
        return `You approach what was supposed to be the Village of ${AreaNames.SILVOS} but all you see is rubble and a burning mess of buildings all around you. In times such as these it is not an uncommon sight for entire villages to be destroyed by the Monsters, they come in the night without warning and destroy everything without a second thought.<br><br>You hear a small scream from a far, and then you realise that it is the cry of a young child.<br><br>Do you go to help the child or leave them to fend for themselves?<br><br>help / run`
    }

    ['e1s1'](player: Player): string {
        return `You dash around the corner and hear the screams growing louder and louder.. closer.. and closer.. until you turn the corner from the town square only to see that it is filled with a sea of monsters. EVERYWHERE THEY CRAWL. You tremble before them as one by one they begin to notice your presence.. But you can see the young girl in the distance hanging on to a large tree in the middle of the town square, screaming, as the monsters claw their way up to her.<br><br>If you choose to fight this might not end too well for you..<br><br>Do you fight or run?<br><br>fight / run`
    }

    ['e1s2'](player: Player): string {
        return `Clenching your ${items.get(player.meta.inventoryMeta.weapon).name} you take a deep breath.. Calming your nerves.. There is one way forward and now with all the monsters attention squarely on you there is no way back. You swing your ${items.get(player.meta.inventoryMeta.weapon).name} side to side cutting down one monster after the other.. Being pushed back with the occasional claw from one of the monsters, yet you push on, digging down deep into your warrior spirit, holding onto the memories of times before..<br><br>The screams of the monsters die down, one after another..<br><br>Until finally, there are no more left..<br><br>You look all around you, seeing the carnage you have left behind and begin to feel the pain from all the attacks.<br><br>The young girl stagger down the tree with a slight limp as she reaches the bottom and begins steadying her footing. She stares directly into your eyes but you notice that something isn't right..<br><br>She begins walking towards you.. Running.. What? You stumble your way up but are dazed by the attacks, you can't tell if she is holding a weapon or not but she is coming at you full force.<br><br>Do you raise your weapon and strike before she gets to you or do you hold still until you can see clearer?<br><br>wait / strike`
    }

    ['e1s3'](player: Player): string {
        return `You hold your nerves steady to get a clearer picture.. she gets closer and BAM.. She flies onto you biting your neck and clawing your back. The girl IS A MONSTER, you hear her screech and wail as the beast morphs from a young girl into a Werewolf. You reach around your back and rip the thing from you, pulling out your ${items.get(player.meta.inventoryMeta.weapon).name} and striking the Werewolf with one swift blow, tearing its head from its shoulders.<br><br>Argh, all this effort for this thing you think to yourself..<br><br>Well even though nothing came of this, the eyes from Pure Paradise are always watching.. and they will take notice of your heroic acts in the face of the unknown.`
    }

    ['e1s4'](player: Player): string {
        return `You cannot hesitate in situations like this and pull your ${items.get(player.meta.inventoryMeta.weapon).name} and STRIKE HER DOWN. Starring at her young body you can't help but wonder what was she thinking? You had no other choice.. There was nothing you could have done, but still.. you have taken the life of a child, and that lives with you forever, even in Pure Paradise.`
    }

    ['e1s5'](player: Player): string {
        return `Catch a hero flying straight into that mess, at least no one will know of your cowardliness because there was no one to see it.. right?`
    }

    ['e1s6'](player: Player): string {
        return `Saving everyone isn't your problem, besides you've got better things to do with your time than protect a helpless child.`
    }

    // EVENT 2 - DYING SOLDIER

    ['e2s0'](player: Player): string {
        return `Walking towards ${AreaNames.TIRERA} with the hope of grabbing a glimpse of the magnificent city. Growing up you always heard the stories of their mighty warriors and noble Elders, towers as high as the clouds and mighty beasts tamed for the protection of the city and its people.<br><br>As you draw nearer you notice smoke in the sky and more and more bodies before you, both human and monster.. You can only begin to imagine what horrors took place. And it all seems fresh? You see one solider crawling on the ground in the battlefield with half his torso torn off. Some what in shock you run up to him to try to help in some way..<br><br>ARRRGHHHHHH... monsters.. they attacked... they're heading for.. ${AreaNames.SILVOS}.. tried to stop them.. Please.. Kill me..<br><br>Do you take the sliders life or carry on, leaving him as he is?<br><br>kill / leave`
    }

    ['e2s1'](player: Player): string {
        return `WHAT HAVE YOU DONE!! Turning around you see another group of soldiers approaching but you can see how this current situations may appear to be misleading for anyone stumbling upon you.<br><br>Covered in the solider's blood that you had just helped innocently kill, you try to plead with the so approaching men but they don't seem to want to listen..<br><br>ARHHH WE'LL KILL YOU FOR THIS!<br><br>Do you fight the soldiers or try to convince them you were helping ease the killed soldiers pain?<br><br>fight / convince`
    }

    ['e2s2'](player: Player): string {
        return `Sensing that there is no stopping these men from their blood raged enchantment, you draw your ${items.get(player.meta.inventoryMeta.weapon).name} and begin to defend yourself.. <br>One after another they fall to your overwhelming power and strength, the screams from the men can be heard from miles around.<br><br>The last man standing there.. Quivering before you, not as strong and valiant as he was moments before attacking you..<br><br>Ha you think to yourself, you could squash him in an instant, or do you spare his life?<br><br>squash / spare`
    }

    ['e2s3'](player: Player): string {
        return `You cackle like a mad man, before starring into the remaining soldiers eyes, you see him tremble before you as he realises that this is the end for him.. He begs and pleads for his life but you laugh and drive your ${items.get(player.meta.inventoryMeta.weapon).name} through his chest, tearing out his heart.<br><br>Bodies lay everywhere and you've added one more to the pile, oh well.. just one more misfit to blend in with the monsters mess.`
    }

    ['e2s4'](player: Player): string {
        return `Pft, you exhale. You begin to explain what had happened, the solider in front of you is confused, he thought this was the end of himself. So we.. all died for nothing? For.. Nothing..<br><br>CRACK..<br><br>In a moment before you had a chance to make a move the solider plunged his own sword through his skull. Taking his own life.<br><br>You gather yourself together and keep moving forward until you finally see the wreckage that is ${AreaNames.TIRERA}.. Oh well, I guess you couldn't have hoped for much else in a time like this I suppose.`
    }

    ['e2s5'](player: Player): string {
        return `The men continue to rush towards you as you plead with them that you were only meaning to help the solider you had found on the road..<br><br>WHACK.. Out.<br><br>You awake, beaten half to death.. but still alive.. you gather yourself together and keep moving forward until you finally see the wreckage that is ${AreaNames.TIRERA}.. Oh well, I guess you couldn't have hoped for much else in a time like this I suppose.`
    }

    ['e2s6'](player: Player): string {
        return `You decide this solider isn't worth your time or blade and leave him as he is.. Walking forward you notice another group of soldiers..<br><br>HALT.. Oh, its just another Trethamian. Did you have any trouble making your way through?<br><br>You make a shrugging movement, somewhat uninterested in their small talk and ask for the directions towards ${AreaNames.TIRERA}.<br><br>They all turn to each other and laugh.. ${AreaNames.TIRERA} is no more my friend, it was overrun by the monsters long ago, but we managed to clear them out and push them back to ${AreaNames.SILVOS} to deal with. We're heading to Pure Paradise in hope to get a good spot in the city to finally relax from these wretched creatures.<br><br>Well isn't this a waste of your time, the city is destroyed and there is nothing to go to.. I guess you could make some fun out of this still?<br><br>Do you attack the remaining soldiers and tear them all apart for fun or humanely leave?<br><br>attack / leave`
    }

    ['e2s7'](player: Player): string {
        return `You decide you've had enough psychotic episodes for one day and walk away, slightly unhinged by all the human and monster bodies laying around you.`
    }

    ['e2s8'](player: Player): string {
        return `Well I guess there was nothing better to do than attack a group of soldiers before they had a chance to react. You pull out you ${items.get(player.meta.inventoryMeta.weapon).name} and cut them down, one by one.. Until no more remain.. It was fun while it lasted I suppose..<br><br>Off to the next city!`
    }

    // EVENT 3 - ENDING

    ['e3s0'](player: Player): string {
        return `We have been waiting for you ${player.name}.. We have been watching you this entire time.. We see, everything. Know, everything.. Do not think that there isn't a single thing that you have done that we have not seen. That we do not know. Our land of Pure Paradise, we only only the best of people in.. Are you one of them?<br><br>Enter anything to continue..`
    }

    ['e3s1'](player: Player): string {
        return `We have been watching you ${player.name}.. and we have seen your acts of kindness and bravery, even in the face of the unknown. We have heard all the great things you have done for the villages and have witness your mercy and honour. You are a noble person ${player.name} and we would gladly take you in as one of our own.. you are a hero amongst heroes.. You are given one of highest honours, one of our special leagues.<br><br>Welcome, to becoming apart of Pure Paradise.<br><br>This is what you've traveled so far and fought so hard for.. you are truly the hero of this story.. Thank you!<br>The End.<br><br>Thank you for playing.<br><br>Arone Tie Susau 2020")`
    }

    ['e3s2'](player: Player): string {
        return `You've done some bad things ${player.name}.. You've done some pretty bad things.. But you're not the worst we've seen.. Hmm we have a spot forpeople just like you.. <br><br>For all the bad deeds you've committed we sentence you to 2 years of cleaning the city sewerage systems.<br><br>It may never clear the atrocities that you have committed but at least you have something to atone for the crimes you havecommitted.<br><br>The End.<br><br>Thank you for playing.<br><br>Arone Tie Susau 2020`
    }

}
