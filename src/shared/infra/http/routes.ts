import { Router } from "express";
import { CreateAddressController } from "../../../modules/Users/useCases/createAddress/CreateAddressController";
import { CreateTechController } from "../../../modules/Users/useCases/createTech/CreateTechController";

import { CreateUserController } from "../../../modules/Users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../modules/Users/useCases/deleteUser/DeleteUserController";
import { EditUserController } from "../../../modules/Users/useCases/editUser/EditUserController";
import { ListAddressesByUserController } from "../../../modules/Users/useCases/listAddressesByUser/ListAddressesByUserController";
import { ListAllUsersController } from "../../../modules/Users/useCases/listAllUsers/ListAllUsersController";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const deleteUserController = new DeleteUserController();
const editUserController = new EditUserController();
const createAddressController = new CreateAddressController();
const listAddressesByUserController = new ListAddressesByUserController();
const createTechController = new CreateTechController();

const routes = Router();

routes.post("/users", createUserController.handle);
routes.get("/users", listAllUsersController.handle);
routes.post("/techs", createTechController.handle);

routes.delete("/users/:id", deleteUserController.handle);
routes.patch("/users/:id", editUserController.handle);

routes.get("/users/:user_id/addresses", listAddressesByUserController.handle);
routes.post("/users/:user_id/addresses", createAddressController.handle);


export { routes };