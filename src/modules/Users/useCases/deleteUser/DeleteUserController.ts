import { Request, Response } from "express";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    const { id } = request.params;

    await deleteUserUseCase.execute(id);

    return response.json();
  }
}

export { DeleteUserController };