import {IUser} from '../types/User'
import { model, Schema } from "mongoose"
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  phone: String,
  userCategory: {
    type: String,
    required: true,
  }
}, {timestamps: true});

export default model<IUser>('User', UserSchema);
