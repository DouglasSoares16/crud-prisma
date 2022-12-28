import { UsersTechs } from "@prisma/client";
import { IUserTechDTO } from "../dtos/IUserTechDTO";

interface IUserTechRepository {
  create(data: IUserTechDTO): Promise<void>;
  findAllTechsByUserId(user_id: string): Promise<UsersTechs[]>;
}

export { IUserTechRepository };