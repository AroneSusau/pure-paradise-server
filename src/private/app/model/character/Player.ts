import { Character } from "./Character.js"
import { Equipped } from "./Equipped.js"
import { Point } from "../map/Point.js"

export class Player extends Character { 
  
  private _localCoords: Point
  private _globalCoords: Point
  private _equipped: Equipped

  public updateLocalPosition(x: number, y: number) { 
    this._localCoords.x = x
    this._localCoords.y = y
    this._localCoords.updateIndex()
  }

  public updateGlobalPosition(x: number, y: number) { 
    this._globalCoords.x = x
    this._globalCoords.y = y
    this._globalCoords.updateIndex()
  }

  public get localCoords(): Point {
    return this._localCoords
  }

  public get globalCoords(): Point {
    return this._globalCoords
  }

  public get equipped(): Equipped {
    return this._equipped
  }

}