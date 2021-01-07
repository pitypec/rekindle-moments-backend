import jwt from 'jsonwebtoken';

export const signToken = (user) => {
  return jwt.sign(
    {
      iss: 'rekindle_moment',
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    process.env.JWT_SECRET
  );
};

export const refreshJwt = (user) => {
  return jwt.sign(
    {
      iss: 'btssocial',
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 365)
    },
    process.env.JWT_SECRET
  );
};
