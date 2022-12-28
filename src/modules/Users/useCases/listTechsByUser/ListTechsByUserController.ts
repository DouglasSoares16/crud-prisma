import { Request, Response } from "express";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";
import { UserTechRepository } from "../../infra/prisma/implementations/UserTechRepository";
import { ListTechsByUserUseCase } from "./ListTechsByUserUseCase";

class ListTechsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const userTechRepository = new UserTechRepository();

    const listTechsByUserUseCase =
      new ListTechsByUserUseCase(userRepository, userTechRepository);
    
    const { user_id } = request.params;

    const techs = await listTechsByUserUseCase.execute(user_id);

    return response.json(techs);
  }
}

export { ListTechsByUserController };