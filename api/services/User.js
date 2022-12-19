const { getUserById } = require("../DAL/user");

class UserServices {
  static async getProfile(id) {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = UserServices;
