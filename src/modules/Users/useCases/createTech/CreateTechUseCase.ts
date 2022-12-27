import { Tech } from "@prisma/client";
import { ITechDTO } from "../../dtos/ITechDTO";
import { TechsErrors } from "../../errors/TechsErrors";
import { ITechRepository } from "../../repositories/ITechRepository";

class CreateTechUseCase {
  constructor(
    private techRepository: ITechRepository
  ) {}

  async execute({ name, type }: ITechDTO): Promise<Tech> {
    const techExists = await this.techRepository.findByName(name);

    if (techExists) {
      throw new TechsErrors.TechAlreadyExists();
    }

    const tech = await this.techRepository.create({ name, type });

    return tech;
  }
}

export { CreateTechUseCase };