const bcrypt = require("bcrypt");

const hashGenerator = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);

    return passwordHash;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const comparePassword = async (password, passInVerification) => {
  const isEqual = await bcrypt.compare(passInVerification, password);
  return isEqual;
};

module.exports = { hashGenerator, comparePassword };
