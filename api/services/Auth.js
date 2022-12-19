const { createUser, findUser } = require("../DAL/user");
const { generateToken } = require("../utils/handleToken");
const { hashGenerator, comparePassword } = require("../utils/handlePassword");

class AuthServices {
  static #tokenProvider(payload) {
    const expiresIn = 60 * 60;
    const token = generateToken(payload, expiresIn);
    return token;
  }

  static async register({ name, email, password }) {
    if (!name || !password || !email) {
      return { message: "Missing fields", code: 404 };
    }

    password = await hashGenerator(password);

    const data = await createUser({
      name,
      email,
      password,
    });

    const { user, isCreated } = data;
    if (isCreated) {
      const { name, email, address, id, photo } = user;
      const payload = {
        id,
        name,
        email,
        address,
        photo,
      };
      const token = this.#tokenProvider(payload);
      const response = { user: payload, token };

      return response;
    }
    // TODO: manejar los errores, crear un errorhandler
    // TODO: usar TryCatch
    return { message: "email is used", code: 404 };
  }

  static async login({ email, password }) {
    try {
      const user = await findUser(email);
      if (user) {
        const isEqual = comparePassword(user.password, password);

        if (isEqual) {
          const { name, email, address, id, photo } = user;
          const payload = {
            id,
            name,
            email,
            address,
            photo,
          };
          const token = this.#tokenProvider(payload);
          const response = { user: payload, token };
          return response;
        }
        return { message: "incorrect credentials", code: 400 };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = AuthServices;
