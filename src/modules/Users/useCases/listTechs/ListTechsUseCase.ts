import { Tech } from "@prisma/client";
import { ITechRepository } from "../../repositories/ITechRepository";

class ListTechsUseCase {
  constructor(
    private techRepository: ITechRepository
  ) {}

  async execute(): Promise<Tech[]> {
    const techs = await this.techRepository.findAll();

    return techs;
  }
}

export { ListTechsUseCase };