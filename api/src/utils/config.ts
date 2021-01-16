import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  case 'development':
      path = `${__dirname}/../../.env.development`;
      break;
  default:
      path = `${__dirname}/../../.env`;
}
dotenv.config({ path });

export const { PORT } = process.env;
export const { HOST } = process.env;
export const { MONGO_URI } = process.env;
export const { APP_URL } = process.env;
export const { APP_SECRET } = process.env;
