import { Request, Response } from "express";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";
import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const editUserUseCase = new EditUserUseCase(userRepository);

    const { id } = request.params;
    const { name } = request.body;

    await editUserUseCase.execute({ user_id: id, name });

    return response.json({ success: true });
  }
}

export { EditUserController };