import { IUserTechDTO } from "../../dtos/IUserTechDTO";
import { TechsErrors } from "../../errors/TechsErrors";
import { UsersErrors } from "../../errors/UsersErrors";
import { ITechRepository } from "../../repositories/ITechRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserTechRepository } from "../../repositories/IUserTechRepository";

class CreateUserTechUseCase {
  constructor(
    private userTechRepository: IUserTechRepository,
    private userRepository: IUserRepository,
    private techRepository: ITechRepository
  ) {}
  
  async execute({ user_id, tech_id }: IUserTechDTO): Promise<void> {
    const userExists = await this.userRepository.findById(user_id);

    if (!userExists) {
      throw new UsersErrors.UserDoesNotExists();
    }

    const techExists = await this.techRepository.findById(tech_id);

    if (!techExists) {
      throw new TechsErrors.TechNotExists();
    }

    await this.userTechRepository.create({ user_id, tech_id });
  }
}

export { CreateUserTechUseCase };