import { Point } from "../map/Point.js";
import { Stats } from "./Stats.js";
import { Equipped } from "./Equipped.js";
import { Inventory } from "../Inventory/Inventory.js";

export class Character { 
  
  private name: String;
  private localCoords: Point
  private globalCoords: Point
  private equpped: Equipped
  private stats: Stats
  private inventory: Inventory;

}