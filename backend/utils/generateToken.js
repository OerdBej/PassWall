import jwt from 'jsonwebtoken';

export const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 10 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV !== 'development',
  });

  return token;
};
