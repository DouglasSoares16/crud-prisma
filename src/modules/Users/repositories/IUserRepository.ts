import { User } from "@prisma/client";
import { IUserDTO } from "../dtos/IUserDTO";

interface IUserRepository {
  create(data: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  findById(user_id: string): Promise<User | null>;
  deleteById(user_id: string): Promise<void>;
}

export { IUserRepository };