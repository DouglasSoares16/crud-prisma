import { User } from "@prisma/client";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe/dist/typings/decorators";

import { IUserDTO } from "../../dtos/IUserDTO";
import { UsersErrors } from "../../errors/UsersErrors";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, password }: IUserDTO): Promise<User> {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new UsersErrors.EmailAlreadyExists();
    }

    const passwordHash = await hash(password, 10);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash
    });

    return user;
  }
}

export { CreateUserUseCase };