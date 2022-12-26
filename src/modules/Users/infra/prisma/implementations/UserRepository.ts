import { User } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/prisma/connection";
import { IUserDTO } from "../../../dtos/IUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

class UserRepository implements IUserRepository {
  private repository = prismaClient.user;

  async findById(user_id: string): Promise<User | null> {
    return this.repository.findUnique({
      where: {
        id: user_id
      }
    })
  }

  async deleteById(user_id: string): Promise<void> {
    await this.repository.delete({
      where: {
        id: user_id
      }
    });
  }
  
  async findAll(): Promise<User[]> {
    return this.repository.findMany();
  }

  async create(data: IUserDTO): Promise<User> {
    const user = await this.repository.create({
      data
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findFirst({
      where: {
        email
      }
    });

    return user;
  }
}

export { UserRepository };