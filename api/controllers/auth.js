const AuthServices = require("../services/Auth");

const registerUser = async (req, res, next) => {
  const { name, password, email } = req.body;
  try {
    const response = await AuthServices.register({ name, password, email });

    return res.status(201).json({ response });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const response = await AuthServices.login({ email, password });
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser };
