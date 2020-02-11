export class Point { 

  private index: number

  constructor(private x: number, private y: number) { 
    this.index = x * y
  }

}