import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  //validating
  try {
    if (!email || !password || !name) {
      throw new Error('Fields required');
    }

    //check if user exist in db
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: 'User aldready exist' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    //user dont exist hash the password
  } catch (error) {}
};

export const login = async (req, res) => {
  res.send('login route');
};

export const logout = async (req, res) => {
  res.send('login route');
};
