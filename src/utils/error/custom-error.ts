import { inherits } from "util";

export default class CustomError<T = undefined> {
  public message?: string;
  public name: string;
  public data: T;
  constructor(message: string, data: T) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    this.message = message;
    this.name = this.constructor.name;
    this.data = data;
  }
}

inherits(CustomError, Error);
