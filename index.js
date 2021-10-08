const mongoose = require("mongoose");

const conString =
  "mongodb+srv://admin:minhon706@cluster0.pjuzr.mongodb.net/webhook?retryWrites=true&w=majority";

mongoose.connect(conString).then(console.log);
