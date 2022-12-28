import { IUserTechDTO } from "../dtos/IUserTechDTO";

interface IUserTechRepository {
  create(data: IUserTechDTO): Promise<void>;
}

export { IUserTechRepository };