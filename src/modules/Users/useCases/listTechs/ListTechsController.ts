import { Response, Request } from "express";
import { TechRepository } from "../../infra/prisma/implementations/TechRepository";
import { ListTechsUseCase } from "./ListTechsUseCase";

class ListTechsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const techRepository = new TechRepository();
    const listTechsUseCase = new ListTechsUseCase(techRepository);

    const techs = await listTechsUseCase.execute();

    return response.json(techs);
  }
}

export{ ListTechsController };