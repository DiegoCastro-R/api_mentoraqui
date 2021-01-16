import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json([
    {
      Hello: 'Bem vindo a API MentorAqui',

    },
  ]);
});


export default routes;
