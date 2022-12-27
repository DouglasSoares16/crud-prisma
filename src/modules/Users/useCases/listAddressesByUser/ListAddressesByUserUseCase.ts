import { Address } from "@prisma/client";
import { UsersErrors } from "../../errors/UsersErrors";

import { IAddressRepository } from "../../repositories/IAddressRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListAddressesByUserUseCase {
  constructor(
    private addressRepository: IAddressRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(user_id: string): Promise<Address[]> {
    const userExists = await this.userRepository.findById(user_id);

    if (!userExists) {
      throw new UsersErrors.UserDoesNotExists();
    }

    const addresses = await this.addressRepository.findByUserId(user_id);

    return addresses;
  }
}

export { ListAddressesByUserUseCase };