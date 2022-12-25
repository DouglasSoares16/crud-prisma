import { AppError } from "../../../shared/errors/AppError";

export namespace UsersErrors {
  export class EmailAlreadyExists extends AppError {
    constructor() {
      super("Email Already Exists");
    }
  }
}