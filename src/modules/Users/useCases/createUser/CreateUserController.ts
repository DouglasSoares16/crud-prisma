import { Request, Response } from "express";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const { name, email, password } = request.body;

    const user = await createUserUseCase.execute({ name, email, password });

    return response.status(201).json(user);
  }
}

export { CreateUserController };