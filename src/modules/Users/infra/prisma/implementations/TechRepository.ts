import { Tech } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/prisma/connection";
import { ITechDTO } from "../../../dtos/ITechDTO";
import { ITechRepository } from "../../../repositories/ITechRepository";

class TechRepository implements ITechRepository {
  private repository = prismaClient.tech;
  
  async findByName(name: string): Promise<Tech | null> {
    return this.repository.findFirst({
      where: {
        name
      }
    });
  }

  async create(data: ITechDTO): Promise<Tech> {
    const tech = await this.repository.create({
      data
    });

    return tech;
  }
}

export { TechRepository };