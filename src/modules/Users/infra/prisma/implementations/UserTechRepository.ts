import { UsersTechs } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/prisma/connection";
import { IUserTechDTO } from "../../../dtos/IUserTechDTO";
import { IUserTechRepository } from "../../../repositories/IUserTechRepository";

class UserTechRepository implements IUserTechRepository {
  private repository = prismaClient.usersTechs;
  
  async findAllTechsByUserId(user_id: string): Promise<UsersTechs[]> {
    return this.repository.findMany({
      where: {
        user_id,
      },
      include: {
        tech: true,
      }
    });
  }

  async create({ user_id, tech_id }: IUserTechDTO): Promise<void> {
    await this.repository.create({
      data: {
        user_id,
        tech_id,
      },
    });
  }
}

export { UserTechRepository };
