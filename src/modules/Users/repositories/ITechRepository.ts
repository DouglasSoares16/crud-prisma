import { Tech } from "@prisma/client";
import { ITechDTO } from "../dtos/ITechDTO";

interface ITechRepository {
  create(data: ITechDTO): Promise<Tech>;
  findByName(name: string): Promise<Tech | null>;
  findById(tech_id: string): Promise<Tech | null>;
  findAll(): Promise<Tech[]>;
}

export { ITechRepository };