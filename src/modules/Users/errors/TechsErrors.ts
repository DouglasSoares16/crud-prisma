import { AppError } from "../../../shared/errors/AppError";

export namespace TechsErrors {
  export class TechAlreadyExists extends AppError {
    constructor() {
      super("Tech Already Exists");
    }
  }
}