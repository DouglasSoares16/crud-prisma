import { prismaClient } from "../../../../../shared/infra/prisma/connection";
import { IUserTechDTO } from "../../../dtos/IUserTechDTO";
import { IUserTechRepository } from "../../../repositories/IUserTechRepository";

class UserTechRepository implements IUserTechRepository {
  private repository = prismaClient.usersTechs;

  async create(data: IUserTechDTO): Promise<void> {
    await this.repository.create({
      data,
    });
  }
}

export { UserTechRepository };
