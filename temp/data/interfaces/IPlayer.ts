import { Player } from "../../model/Player";
import { Try } from "../../util/Try";

export default abstract class IPlayer {

  abstract getPlayer(id: string): Try<Player>
  abstract setPlayer(player: Player)
  abstract unsetPlayer(id: string)

}