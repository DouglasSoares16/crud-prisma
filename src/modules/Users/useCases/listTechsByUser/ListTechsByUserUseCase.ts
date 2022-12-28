import { UsersErrors } from "../../errors/UsersErrors";
import { UserTechsMap } from "../../mappers/UserTechsMap";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserTechRepository } from "../../repositories/IUserTechRepository";

class ListTechsByUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private userTechRepository: IUserTechRepository
  ) {}
  
  async execute(user_id: string) {
    const userExists = await this.userRepository.findById(user_id);

    if (!userExists) {
      throw new UsersErrors.UserDoesNotExists();
    }

    const techs = await this.userTechRepository.findAllTechsByUserId(user_id);

    const techsMapped = UserTechsMap.toDTO(techs);

    return techsMapped;
  }
}

export { ListTechsByUserUseCase };