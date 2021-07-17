import { Context } from '../constant/Context';
import { AreaNames } from '../maps/AreaNames';

export class Player {
 
  public id: string
  public name: string
  public context: Context = Context.FREE_ROAM
  public map: AreaNames = AreaNames.VENMARK

  constructor(id, name) {
    this.id = id
    this.name = name
  }
  
  public health: number = 100
  public hunger: number = 100
  public thirst: number = 100
}
