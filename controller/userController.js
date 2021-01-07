import User from '../models/user.js';
import { signToken } from '../utils/auth.js';
export const seed = async (req, res, next) => {
  const user = await User.insertMany();
};

export const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ 'local.email': email });
  if (user) {
    return res.status(400).json({ error: 'user with email already exist' });
  }

  const newUser = new User({
    method: 'local',
    local: {
      email,
      password
    }
  });

  await newUser.save();
  console.log(newUser);
  const accessToken = signToken(newUser);
  return res.status(201).json({ accessToken });
};
export const signIn = async (req, res, next) => {
  const accessToken = signToken(req.user);
  return res.status(200).json({ accessToken });
};
export const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  return res.status(200).json(users);
};
