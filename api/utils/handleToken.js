const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const generateToken = (payload, expiresIn) => {
  const token = jwt.sign({ payload }, SECRET, { expiresIn });
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET, (error, data) => {
    if (error) {
      throw new Error("Token is not valid!");
    }
    return data.payload;
  });
};
module.exports = { generateToken, verifyToken };
