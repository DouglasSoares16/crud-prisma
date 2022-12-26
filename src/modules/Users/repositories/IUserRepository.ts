import { User } from "@prisma/client";

import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { IUserDTO } from "../dtos/IUserDTO";

interface IUserRepository {
  create(data: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  findById(user_id: string): Promise<User | null>;
  deleteById(user_id: string): Promise<void>;
  updateUserName(data: IUpdateUserDTO): Promise<void>;
}

export { IUserRepository };