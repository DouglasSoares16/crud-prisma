import { Router } from "express";

import { CreateUserController } from "../../../modules/Users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../modules/Users/useCases/deleteUser/DeleteUserController";
import { EditUserController } from "../../../modules/Users/useCases/editUser/EditUserController";
import { ListAllUsersController } from "../../../modules/Users/useCases/listAllUsers/ListAllUsersController";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const deleteUserController = new DeleteUserController();
const editUserController = new EditUserController();

const routes = Router();

routes.post("/users", createUserController.handle);
routes.get("/users", listAllUsersController.handle);
routes.delete("/users/:id", deleteUserController.handle);
routes.patch("/users/:id", editUserController.handle);

export { routes };