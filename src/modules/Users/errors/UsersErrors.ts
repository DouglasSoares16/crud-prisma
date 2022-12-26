import { AppError } from "../../../shared/errors/AppError";

export namespace UsersErrors {
  export class EmailAlreadyExists extends AppError {
    constructor() {
      super("Email Already Exists");
    }
  }

  export class UserDoesNotExists extends AppError {
    constructor() {
      super("User Does Not Exists", 404);
    }
  }
}