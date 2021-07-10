import { Socket } from "socket.io"
import { IDatabase } from "../data/IDatabase"
import IController from "./IController"

export default class GlobalController extends IController {
  
  protected database: IDatabase

  constructor(database: IDatabase) {
    super()

    this.domain = "client"
    this.source = "global"

    this.database = database
  }

  public chat(args: any[], socket: Socket) {
    socket.broadcast.emit(`${this.domain}:${this.source}:chat`, {
      id: socket.id,
      message: args,
    })
  }
}
