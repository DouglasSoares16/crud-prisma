import { AppError } from "../../../shared/errors/AppError";

export namespace TechsErrors {
  export class TechAlreadyExists extends AppError {
    constructor() {
      super("Tech Already Exists");
    }
  }

  export class TechNotExists extends AppError {
    constructor() {
      super("Tech Not Exists!", 404);
    }
  }
}