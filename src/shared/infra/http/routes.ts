import { Router } from "express";

import { CreateUserController } from "../../../modules/Users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../modules/Users/useCases/deleteUser/DeleteUserController";
import { ListAllUsersController } from "../../../modules/Users/useCases/listAllUsers/ListAllUsersController";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const deleteUserController = new DeleteUserController();

const routes = Router();

routes.post("/users", createUserController.handle);
routes.get("/users", listAllUsersController.handle);
routes.delete("/users/:id", deleteUserController.handle);

export { routes };