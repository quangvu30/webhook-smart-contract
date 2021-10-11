require("dotenv").config();
module.exports = {
  mongo: {
    PORT: process.env.MONGO_PORT,
    HOST: process.env.MONGO_HOST,
    USERNAME: process.env.MONGO_USERNAME,
    PASSWORD: process.env.MONGO_PASSWORD,
    DB: process.env.DB,
  },
  app: {
    ENV: process.env.ENV || "production",
    PORT: process.env.PORT_APP || 3000,
  },
  telegram: {
    TOKEN_BOT: process.env.TOKEN_BOT,
  },
};
