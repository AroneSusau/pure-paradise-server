import { Socket } from "socket.io"
import { IDatabase } from "../data/IDatabase"
import { MapManager } from "../maps/MapManager"
import { Player } from "../model/Player"
import { Logger } from "../util/Logger"
import { Point } from "../util/Point"
import IController from "./IController"

export default class MovementController extends IController {
  
  protected database: IDatabase

  constructor(database: IDatabase) {
    super()

    this.domain = "client"
    this.source = "connection"

    this.database = database
  }

  public join(args: any, socket: Socket) {    
    const player = new Player(socket.id, args)
    const local  = new Point(10, 10)
    const global = new Point(0, 0)
    
    this.database.players.setPlayer(player)
    this.database.localPosition.setPosition(socket.id, local)
    this.database.globalPosition.setPosition(socket.id, global)

    socket.broadcast.emit(`${this.domain}:${this.source}:player`, {
      playerid: player.id,
      message: `${player.name} has joined the adventure!`,
      playersCount: this.database.players.getPlayersCount(),
      context: player.context,
      local,
      global,
      map: player.map
    })

    socket.emit(`${this.domain}:${this.source}:join`, {
      message: `Welcome ${player.name}`,
      local: local,
      global: global,
      playersCount: this.database.players.getPlayersCount(),
      context: player.context,
      health: player.health,
      hunger: player.hunger,
      thirst: player.thirst,
      map: player.map,
      raw: MapManager.maps.get(player.map).raw
    })    
  }
}
