import { Socket } from "socket.io"
import { IDatabase } from "../data/IDatabase"
import { Point } from "../util/Point"
import { Success } from "../util/Try"
import IController from "./IController"

export default class MovementController extends IController {
  
  protected database: IDatabase

  constructor(database: IDatabase) {
    super()

    this.domain = "client"
    this.source = "movement"

    this.database = database
  }

  public w(args: any[], socket: Socket) {
    const position = this.database.localPosition.getPosition(socket.id).value

    if (position instanceof Success) {
      const local: Point = position.result

      local.y--

      if (local.y <= 0) {
        local.y = 20
      }

      socket.emit(`${this.domain}:${this.source}:w`, { local })
    }
  }

  public a(args: any[], socket: Socket) {
    const position = this.database.localPosition.getPosition(socket.id).value

    if (position instanceof Success) {
      const local: Point = position.result

      local.x--

      if (local.x <= 0) {
        local.x = 20
      }

      socket.emit(`${this.domain}:${this.source}:a`, { local })
    }
  }

  public s(args: any[], socket: Socket) {
    const position = this.database.localPosition.getPosition(socket.id).value

    if (position instanceof Success) {
      const local: Point = position.result

      local.y++

      if (local.y >= 20) {
        local.y = 0
      }

      socket.emit(`${this.domain}:${this.source}:s`, { local })
    }
  }

  public d(args: any[], socket: Socket) {
    const position = this.database.localPosition.getPosition(socket.id).value

    if (position instanceof Success) {
      const local: Point = position.result

      local.x++

      if (local.x >= 20) {
        local.x = 0
      }

      socket.emit(`${this.domain}:${this.source}:d`, { local })
    }
  }
}