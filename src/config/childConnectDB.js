const mongoose = require("mongoose");
const env = require("./enviroment");

const DB_URL =
  env.app.ENV === "production"
    ? `mongodb://${env.mongo.USERNAME}:${env.mongo.PASSWORD}@${env.mongo.HOST}:${env.mongo.PORT}/${env.mongo.DB}`
    : `mongodb://${env.mongo.HOST}:${env.mongo.PORT}/${env.mongo.DB}`;

const connect = () => {
  mongoose
    .connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Mongodb connect successfully");
    })
    .catch((err) => {
      console.log(`Mongodb connect err: ${err.message}`);
    });
};

module.exports = {
  mongoose,
  connect,
};
