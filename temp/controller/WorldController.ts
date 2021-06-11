import { Socket } from "socket.io"
import IController from "./IController"

export default class WorldController extends IController {

  constructor() {
    super()

    this.domain = "client"
    this.source = "world"
  }

  public chat(args: any[], socket: Socket) {
    socket.broadcast.emit(`${this.domain}:${this.source}:chat`, {
      id: socket.id,
      message: args,
    })
  }
}