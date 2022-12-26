import { UsersErrors } from "../../errors/UsersErrors";
import { IUserRepository } from "../../repositories/IUserRepository";

class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user_id: string): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new UsersErrors.UserDoesNotExists();
    }

    await this.userRepository.deleteById(user_id);
  }
}

export { DeleteUserUseCase };