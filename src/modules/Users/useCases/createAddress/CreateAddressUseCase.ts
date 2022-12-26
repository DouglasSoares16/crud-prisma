import { Address } from "@prisma/client";

import { IAddressDTO } from "../../dtos/IAddressDTO";
import { UsersErrors } from "../../errors/UsersErrors";
import { IAddressRepository } from "../../repositories/IAddressRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateAddressUseCase {
  constructor(
    private addressRepository: IAddressRepository,
    private userRepository: IUserRepository
  ) {}

  async execute({ zipcode, street, number, user_id }: IAddressDTO): Promise<Address> {
    const userExists = await this.userRepository.findById(user_id);

    if (!userExists) {
      throw new UsersErrors.UserDoesNotExists();
    }

    const address = await this.addressRepository.create({ zipcode, street, number, user_id });

    return address;
  }
}

export { CreateAddressUseCase };