import { TypeTech } from "@prisma/client";
import { Request, Response } from "express";
import { TechRepository } from "../../infra/prisma/implementations/TechRepository";
import { CreateTechUseCase } from "./CreateTechUseCase";

class CreateTechController {
  async handle(request: Request, response: Response): Promise<Response> {
    const techRepository = new TechRepository();
    const createTechUseCase = new CreateTechUseCase(techRepository);

    const { name, type } = request.body;

    const typeTech = type as TypeTech;

    const tech = await createTechUseCase.execute({ name, type: typeTech });

    return response.status(201).json(tech);
  }
}

export { CreateTechController };