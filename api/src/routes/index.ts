import { Router } from 'express';
import UsersRouter from './users.routes'
import { APP_URL } from '../utils/config';

const routes = Router();
routes.get('/', (req, res) => {
  res.json([
    {
      Hello: 'Bem vindo a API MentorAqui',
      users: `${APP_URL}/users`,
    },
  ]);
});

routes.use('/users', UsersRouter);

export default routes;
