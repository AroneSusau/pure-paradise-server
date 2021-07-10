import { Logger } from "../util/Logger";
import { Success } from "../util/Try";
import { IDatabase } from "./IDatabase";
import IPlayer from "./interfaces/IPlayer";
import IPosition from "./interfaces/IPosition";
import { PlayerManager } from "./managers/PlayerManager";
import { PositionManager } from "./managers/PositionManager";

export class LocalDB extends IDatabase {

  public ids:            Map<string, boolean> = new Map()

  public players:        IPlayer   = new PlayerManager()
  public localPosition:  IPosition = new PositionManager();
  public globalPosition: IPosition = new PositionManager();

  unsetClient(id: string) {
    
    const player = this.players.getPlayer(id)

    if (player.value instanceof Success) {
      this.players.unsetPlayer(id)
      this.localPosition.unsetPosition(id)
      this.globalPosition.unsetPosition(id)
    }

    this.ids.delete(id)
  }

  connect(...args: any[]) {
    Logger.info("Local Database, connection not required.")
  }

  disconnect(...args: any[]) {
    Logger.info("Local Database, disconnection not required.")
  }

}
