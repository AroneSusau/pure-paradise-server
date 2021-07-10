import { IDatabase } from "../data/IDatabase";

export default abstract class IController {

  protected abstract database: IDatabase;

  public domain: string;
  public source: string;

}