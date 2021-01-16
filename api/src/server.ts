/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import mongoose from 'mongoose';
import routes from './routes';
import { PORT, HOST, MONGO_URI } from './utils/config';

const app = express();
const DateNow = Date().toString();

app.use(bodyParser.json());

app.use(favicon(path.join(`${__dirname}/public/favicon.ico`)));
app.use(routes);

mongoose.connect(`${MONGO_URI}`, { useNewUrlParser: true }).then(() => { console.log('🛰  MongoDB, Connected') }).catch((err) => { console.log(`⛔ ${err}`) })

app.listen(PORT, () => {
  console.info('⌚ Server starting');
  console.info(`🚀 Server started on ${HOST}${PORT} at ${DateNow}`);
});
