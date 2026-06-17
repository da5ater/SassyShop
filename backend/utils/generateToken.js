const jwt = require('jsonwebtoken');

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 1 * 60 * 60 * 1000, //1 hour
  });

  return token;
};

module.exports = generateToken;
