import { Socket } from "socket.io"
import IController from "./IController"

export default class MovementController extends IController {

  constructor() {
    super()

    this.domain = "client"
    this.source = "movement"
  }

  public w(args: any[], socket: Socket) {
    socket.broadcast.emit(`${this.domain}:${this.source}`, "w was called!")
  }

  public a(args: any[], socket: Socket) {
    socket.broadcast.emit(`${this.domain}:${this.source}`, "a was called!")
  }

  public s(args: any[], socket: Socket) {
    socket.broadcast.emit(`${this.domain}:${this.source}`, "s was called!")
  }

  public d(args: any[], socket: Socket) {
    socket.broadcast.emit(`${this.domain}:${this.source}`, {
      player: socket.id,
    })
  }
}