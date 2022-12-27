import { Request, Response } from "express";

import { AddressRepository } from "../../infra/prisma/implementations/AddressRepository";
import { UserRepository } from "../../infra/prisma/implementations/UserRepository";
import { ListAddressesByUserUseCase } from "./ListAddressesByUserUseCase";

class ListAddressesByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const addressRepository = new AddressRepository();
    const userRepository = new UserRepository();
    const listAddressesByUserUseCase =
      new ListAddressesByUserUseCase(addressRepository, userRepository);

    const { user_id } = request.params;

    const addresses = await listAddressesByUserUseCase.execute(user_id);

    return response.json(addresses);
  }
}

export { ListAddressesByUserController };