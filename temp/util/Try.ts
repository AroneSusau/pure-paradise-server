export abstract class Monad<A> {}

export class Success<A> extends Monad<A> {
  
  public result: A
  
  constructor(value: A) {    
    super()
    
    this.result = value
  }
}

export class Failure<A> extends Monad<A> {
  
  public exception
  
  constructor(error) {    
    super()
    
    this.exception = error
  }
}

export class None<A> extends Monad<A> {}

export class Try<A> {

  public value: Monad<A>

  constructor(callback: () => Monad<A>) {
    try {
      this.value = callback()
    } catch(error) {
      this.value = new Failure(error)
    }
  }

}