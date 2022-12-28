import { Request, Response } from "express";
import { TechRepository } from "../../infra/prisma/implementations/TechRepository";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";
import { UserTechRepository } from "../../infra/prisma/implementations/UserTechRepository";
import { CreateUserTechUseCase } from "./CreateUserTechUseCase";

class CreateUserTechController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const techRepository = new TechRepository();
    const userTechRepository = new UserTechRepository();

    const createUserTechUseCase =
      new CreateUserTechUseCase(userTechRepository, userRepository, techRepository);

    const { user_id } = request.params;

    const { tech_id } = request.body;

    await createUserTechUseCase.execute({ user_id, tech_id });

    return response.status(201).json();
  }
}

export { CreateUserTechController };