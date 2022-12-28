import { Tech, User } from "@prisma/client";

export interface IUserTechDTO {
  user_id: string;
  user?: User;
  tech_id: string;
  tech?: Tech;
}