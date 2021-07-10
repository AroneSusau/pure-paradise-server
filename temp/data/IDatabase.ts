import IPlayer from "./interfaces/IPlayer";
import IPosition from "./interfaces/IPosition";

export abstract class IDatabase {
  
  abstract players: IPlayer
  abstract localPosition: IPosition
  abstract globalPosition: IPosition

  abstract connect(...args)
  abstract disconnect(...args)

  abstract unsetClient(id: string)

}