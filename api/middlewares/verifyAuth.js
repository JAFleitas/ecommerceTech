const { verifyToken } = require("../utils/handleToken");

module.exports = (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];
      req.token = token;
      req.user = verifyToken(token);

      next();
    } else {
      return res.status(403).json({
        msg: "Token is not valid!",
      });
    }
  } catch (error) {
    return res.status(403).json({
      msg: "Token or security sign are invalids!",
      error,
    });
  }
};
