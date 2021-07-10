import { Point } from "../../util/Point";
import { Try } from "../../util/Try";

export default abstract class IPosition {

  abstract getPosition(id: string): Try<Point>
  abstract setPosition(id: string, point: Point)
  abstract unsetPosition(id: string)

}