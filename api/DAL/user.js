const { User } = require("../db/db");

const createUser = async ({ email, name, password }) => {
  try {
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { name, password },
    });
    const response = { user, isCreated };
    return response;
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { createUser, findUser };
