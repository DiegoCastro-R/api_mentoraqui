import express from 'express';
import routes from './routes';
import { PORT,HOST, MONGO_URI } from './utils/config';
import mongoose from "mongoose";


const app = express();
const DateNow = Date().toString();


app.get('/', (req,res) => {
 res.json({message: 'Ok'});
});
mongoose.connect( `${MONGO_URI}` , { useNewUrlParser: true }).then(() => {console.log('🛰  MongoDB, Connected')}).catch((err) => {console.log('⛔ '+ err)})

app.listen(PORT, () => {
  console.info('⌚ Server starting');
  console.info(`🚀 Server started on ${HOST}${PORT} at ${DateNow}`);
});
' '
