import { Request, Response } from "express";

import { AddressRepository } from "../../infra/prisma/implementations/AddressRepository";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const addressRepository = new AddressRepository();
    const userRepository = new UserRepository();
    const createAddressUseCase = new CreateAddressUseCase(addressRepository, userRepository);

    const { user_id } = request.params;
    const { zipcode, street, number } = request.body;

    const address = await createAddressUseCase.execute({ zipcode, street, number, user_id });

    return response.status(201).json(address);
  }
}

export { CreateAddressController };