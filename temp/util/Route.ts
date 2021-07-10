import IController from "../controller/IController";

export class Route {
  
  public endpoint: string
  public controller: string
  
  public domain: string
  public source: string
  public action: string

  constructor(controller: IController, action: string) {
    this.domain = controller.domain
    this.source = controller.source
    this.action = action

    this.endpoint = `${this.domain}:${this.source}:${action}`
    this.controller = 
      this.source.charAt(0).toUpperCase() + 
      this.source.slice(1) + "Controller"
  }

}