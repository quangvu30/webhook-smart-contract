require("./src/config/database");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const env = require("./src/config/enviroment");
const router = require("./src/modules/router");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/", router);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.listen(env.app.PORT, () => {
  console.log(`App is running on http://localhost:${env.app.PORT}`);
});
