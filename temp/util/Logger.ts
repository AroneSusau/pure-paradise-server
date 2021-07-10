export class Logger {

  public static success(message) {
    console.log("\x1b[1m\x1b[32m[SUCCESS]\x1b[0m", message, "\x1b[2m", this.datetime(), "\x1b[0m")
  }

  public static error(message) {
    console.log("\x1b[1m\x1b[31m[ERROR]\x1b[0m", message, "\x1b[2m", this.datetime(), "\x1b[0m")
  }

  public static warning(message) {
    console.log("\x1b[1m\x1b[33m[Warning]\x1b[0m", message, "\x1b[2m", this.datetime(), "\x1b[0m")
  }

  public static request(message) {
    console.log("\x1b[1m\x1b[35m[REQUEST]\x1b[0m", message, "\x1b[2m", this.datetime(), "\x1b[0m")
  }

  public static info(message) {
    console.log("\x1b[1m\x1b[90m[INFO]\x1b[0m", message, "\x1b[2m", this.datetime(), "\x1b[0m")
  }

  public static datetime(): String {
    return new Date().toUTCString()
  }

}
