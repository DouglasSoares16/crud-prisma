import { Address } from "@prisma/client";
import { IAddressDTO } from "../dtos/IAddressDTO";

interface IAddressRepository {
  create(data: IAddressDTO): Promise<Address>;
  findByUserId(user_id: string): Promise<Address[]>;
}

export { IAddressRepository };