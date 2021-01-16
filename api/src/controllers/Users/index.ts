import { Response, Request } from "express";
import { IUser } from "../../database/types/User";
import bcrypt from 'bcryptjs';
import User from "../../database/models/User";
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '../../utils/config';

const generateToken = (params = {}) => {
  return jwt.sign(params, `${APP_SECRET}`, {
    expiresIn: 86400,
  })
}

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find()
    res.status(200).json({ users })
  } catch (error) {
    res.status(501);
  }
}

const CreateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, password, phone, userCategory } = req.body;
    const isUsedAlreadyCreated = await User.findOne({ email })
    if (isUsedAlreadyCreated){
      res.status(301).send({ error: "Email is already in use"})
    }
    else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user: IUser = new User({ fullName, email, password: hashedPassword, phone, userCategory })
    const newUser: IUser = await user.save()

    const createdUser = {
      fullName: newUser.fullName,
      email: newUser.email,
      phone: newUser.phone,
    }

    res.status(201).json({ message: "User successfuly created", user: createdUser,  authToken: generateToken({id: user._id}) })
  }
  } catch (error) {
    res.status(501);
  }
}

const AuthenticateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email}).select('+password');

    if (!user)
      res.status(400).send({error: "User not found"});
    else {
    if(user && !await bcrypt.compare(password, user.password))
      res.status(401).send({error: "Invalid password"});


    const AuthenticatedUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      userCategory: user.userCategory,
      authToken: generateToken({id: user._id})
    }
    res.send(AuthenticatedUser);
  }
  }
   catch (error) {
    res.status(501);
  }
}

export { getUsers, CreateUser,AuthenticateUser }
