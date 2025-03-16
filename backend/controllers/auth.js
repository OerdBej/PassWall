import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/generateToken.js';

//sign up function
export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  //validating
  try {
    if (!email || !password || !name) {
      throw new Error('Fields required');
    }

    //check if user exist in db
    const userExist = await User.findOne({ email });
    console.log('user exist bro', userExist);
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

    //created the token
    generateToken(res, user._id);

    res.status(201).json({
      success: true,
      user: {
        ...user._doc,
        password: undefined,
      },
      message: 'User Created ',
    });

    //user dont exist hash the password
  } catch (error) {}
};

export const login = async (req, res) => {
  res.send('login route');
};

export const logout = async (req, res) => {
  res.send('login route');
};
