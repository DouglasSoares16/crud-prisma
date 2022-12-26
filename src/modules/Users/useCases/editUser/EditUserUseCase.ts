import { UsersErrors } from "../../errors/UsersErrors";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  user_id: string;
  name: string;
}

class EditUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ user_id, name }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new UsersErrors.UserDoesNotExists();
    }

    await this.userRepository.updateUserName({
      user_id,
      name
    });
  }
}

export { EditUserUseCase };