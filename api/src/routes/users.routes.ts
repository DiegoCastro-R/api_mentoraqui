import { Router } from 'express'
import { CreateUser, AuthenticateUser } from '../controllers/Users'

const UsersRouter = Router();

UsersRouter.post('/', CreateUser);
UsersRouter.post('/auth', AuthenticateUser)

export default UsersRouter;
