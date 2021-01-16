import express from 'express';
import routes from './routes';
import { PORT,HOST } from './utils/config';

const app = express();
const DateNow = Date().toString();


app.get('/', (req,res) => {
 res.json({message: 'Ok'});
});


app.listen(PORT, () => {
  console.info('⌚ Server starting');
  console.info(`🚀 Server started on ${HOST}${PORT} at ${DateNow}`);
});
' '
