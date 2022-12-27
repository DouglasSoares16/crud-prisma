import { Tech } from "@prisma/client";
import { ITechDTO } from "../dtos/ITechDTO";

interface ITechRepository {
  create(data: ITechDTO): Promise<Tech>;
  findByName(name: string): Promise<Tech | null>;
}

export { ITechRepository };