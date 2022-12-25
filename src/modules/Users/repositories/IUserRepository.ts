import { User } from "@prisma/client";
import { IUserDTO } from "../dtos/IUserDTO";

interface IUserRepository {
  create(data: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

export { IUserRepository };