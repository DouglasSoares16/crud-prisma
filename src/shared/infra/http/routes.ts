import { Router } from "express";

import { CreateUserController } from "../../../modules/Users/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "../../../modules/Users/useCases/listAllUsers/ListAllUsersController";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();

const routes = Router();

routes.post("/users", createUserController.handle);
routes.get("/users", listAllUsersController.handle);

export { routes };