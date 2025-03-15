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
    const verificationToken = Math.floor(
      10000 * Math.random() * 90000
    ).toString();

    const user = new User({
      email,
      password: hashPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24 hours
    });

    //save it to db
    await user.save();

    //user dont exist hash the password
  } catch (error) {}
};

export const login = async (req, res) => {
  res.send('login route');
};

export const logout = async (req, res) => {
  res.send('login route');
};
