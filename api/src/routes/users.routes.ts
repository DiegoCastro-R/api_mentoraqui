import { Router } from "express"
import {getUsers, createUser} from '../controllers/Users'

const UsersRouter = Router();

UsersRouter.get('/', getUsers);
UsersRouter.post('/', createUser);

export default UsersRouter;
