const UserServices = require("../services/User");

const getProfile = async (req, res, next) => {
  const id = req.user.id;
  try {
    const infoUser = await UserServices.getProfile(id);
    return res.status(200).json(infoUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProfile };
