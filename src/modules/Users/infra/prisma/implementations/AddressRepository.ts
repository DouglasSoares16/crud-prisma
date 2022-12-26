import { Address } from "@prisma/client";

import { prismaClient } from "../../../../../shared/infra/prisma/connection";
import { IAddressDTO } from "../../../dtos/IAddressDTO";
import { IAddressRepository } from "../../../repositories/IAddressRepository";

class AddressRepository implements IAddressRepository {
  private repository = prismaClient.address;

  async create(data: IAddressDTO): Promise<Address> {
    const address = await this.repository.create({
      data
    });

    return address;
  }
}

export { AddressRepository };