import { Socket } from "socket.io"
import IController from "./IController"

export default class MovementController extends IController {

  constructor() {
    super()

    this.domain = "client"
    this.source = "movement"
  }

  public w(args: any[], socket: Socket) {
    // console.log("w was called!")
  }

  public a(args: any[], socket: Socket) {
    console.log("a was called!")
  }

  public s(args: any[], socket: Socket) {
    console.log("s was called!")
  }

  public d(args: any[], socket: Socket) {
    console.log("d was called!")
  }
}