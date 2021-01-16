import { Response, Request } from "express";
import { IUser } from "../../database/types/User";
import bcrypt from 'bcryptjs';
import User from "../../database/models/User";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find()
    console.log(users)
    res.status(200).json({ users })
  } catch (error) {
    throw error
  }
}

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, password, phone, userCategory } = req.body;
    const isUsedAlreadyCreated = await User.findOne({ email })
    if (isUsedAlreadyCreated){
      res.status(301).json({ message: "Email is already in use"})
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

    res.status(201).json({ message: "User successfuly created", user: createdUser })
  }
  } catch (error) {
    throw error
  }
}

const AuthUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, password, phone } = req.body;
    const isUsedAlreadyCreated: IUser[] = await User.findOne({ email })
    if (isUsedAlreadyCreated){
      res.status(403).json({ message: "Email is already in use"})
    }
    else {
    const user: IUser = new User({ fullName, email, password, phone })
    const newUser: IUser = await user.save()

    const createdUser = {
      fullName: newUser.fullName,
      email: newUser.email,
      phone: newUser.phone,
    }

    res.status(201).json({ message: "User successfuly created", user: createdUser })
  }
  } catch (error) {
    throw error
  }
}

export { getUsers, createUser }
