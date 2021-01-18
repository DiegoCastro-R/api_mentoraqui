/* eslint-disable consistent-return */
/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { APP_SECRET } from '../utils/config';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) response.status(401).send('No JWT provided');

  if (authHeader) {
    const [, token] = authHeader.split(' ');
    const decoded = verify(token, `${APP_SECRET}`);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };
    return next();
  }

  response.status(401).send('JWT Token Invalid');
}
