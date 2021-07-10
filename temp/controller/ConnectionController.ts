import { Socket } from "socket.io"
import { IDatabase } from "../data/IDatabase"
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
    const player = new Player()
    const local  = new Point(10, 10)
    const global = new Point(0, 0)

    player.id = socket.id
    player.name = args
    
    this.database.players.setPlayer(player)
    this.database.localPosition.setPosition(socket.id, local)
    this.database.globalPosition.setPosition(socket.id, global)

    socket.broadcast.emit(`${this.domain}:${this.source}:player`, {
      playerid: player.id,
      local,
      global
    })

    socket.emit(`${this.domain}:${this.source}:join`, {
      message: `Welcome ${player.name}`,
      local: local,
      global: global,
      raw: [
        2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3,
        2, 2, 2, 2, 3, 3, 5, 5, 5, 5, 5, 3, 3, 2, 2, 2, 2, 2, 3, 3,
        2, 2, 3, 3, 3, 10, 9, 9, 9, 9, 9, 11, 3, 2, 2, 2, 2, 2, 3, 3,
        2, 2, 3, 3, 10, 9, 76, 84, 84, 73, 88, 9, 11, 2, 2, 2, 2, 2, 3, 3,
        3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 3, 3,
        3, 3, 3, 3, 4, 1, 1, 5, 5, 5, 1, 1, 4, 3, 2, 2, 2, 3, 3, 3,
        3, 3, 3, 3, 4, 7, 8, 4, 0, 4, 7, 8, 4, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 4, 1, 1, 4, 13, 4, 1, 1, 4, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 4, 5, 5, 4, 5, 4, 5, 5, 4, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3,
        3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3,
        3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3
    ]
    })    
  }
}
