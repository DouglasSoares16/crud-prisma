import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListAllUsersUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();

    return users;
  }
}

export { ListAllUsersUseCase };