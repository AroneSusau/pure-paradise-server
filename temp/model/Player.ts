import { Context } from '../constant/Context';
import { Point } from '../util/Point'

export class Player {
 
  public id: string
  public name: string
  public context: Context = Context.FREE_ROAM
}
