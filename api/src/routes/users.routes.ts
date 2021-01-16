import { Router } from "express"
import {getUsers, CreateUser,AuthenticateUser} from '../controllers/Users'

const UsersRouter = Router();


UsersRouter.post('/', CreateUser);
UsersRouter.post('/auth', AuthenticateUser)

export default UsersRouter;
