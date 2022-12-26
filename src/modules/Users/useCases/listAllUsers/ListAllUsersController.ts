import { Request, Response } from "express";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const listAllUsersUseCase = new ListAllUsersUseCase(userRepository);

    const users = await listAllUsersUseCase.execute();

    return response.json(users);
  }
}

export { ListAllUsersController };