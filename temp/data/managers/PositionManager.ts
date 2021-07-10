import { Logger } from "../../util/Logger";
import { Point } from "../../util/Point";
import { Try, Success, None } from "../../util/Try";
import IPosition from "../interfaces/IPosition";

export class PositionManager extends IPosition {
  
  private positions: Map<string, Point> = new Map()

  getPosition(id: string): Try<Point> {
    return new Try<Point>(() => {
      const result: Point = this.positions.get(id)

      return result == undefined || result == null ?
        new None() :
        new Success(result)
    })
  }

  setPosition(id: string, point: Point) {
    this.positions.set(id, point)
  }

  unsetPosition(id: string) {
    this.positions.delete(id)
  }

}
