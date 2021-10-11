const env = require("../../config/enviroment");

const isVerify = async (req, res, next) => {
  const { token } = req.headers;
  if (env.telegram.TOKEN_BOT !== token) {
    return res.json({
      status: "error",
      error: "token is not valid",
    });
  }
  next();
};

module.exports = {
  isVerify,
};
