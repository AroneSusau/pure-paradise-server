import { Player } from "../../model/Player";
import { Logger } from "../../util/Logger";
import { Try, Success, None } from "../../util/Try";
import IPlayer from "../interfaces/IPlayer";

export class PlayerManager extends IPlayer {
  
  private players: Map<string, Player> = new Map()

  getPlayer(id: string): Try<Player> {
    return new Try<Player>(() => {
      const result: Player = this.players.get(id)

      return result == undefined || result == null ?
        new None() :
        new Success(result)
    })
  }

  setPlayer(player: Player) {
    this.players.set(player.id, player)
  }

  unsetPlayer(id: string) {
    this.players.delete(id)
  }

}
