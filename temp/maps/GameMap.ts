import { Point } from '../util/Point'
import { AreaNames } from './AreaNames'

export abstract class GameMap {

  public abstract name: AreaNames
  public abstract coords: Point
  public abstract raw: Array<number>

}