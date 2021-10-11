const mongoose = require("mongoose");

const Wallet = {
  address: {
    type: String,
    default: "",
  },
  isListen: {
    type: Boolean,
    default: false,
  },
};

const Webhook = {
  endPonit: {
    type: String,
    default: "",
  },
  tokenVerify: {
    type: String,
    default: "",
  },
  inactive: {
    type: Boolean,
    default: true,
  },
};

const UserShema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    balance: {
      type: Number,
      default: 0,
    },
    webhook: Webhook,
    telegram: {
      id: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        default: "",
      },
    },
    wallet: {
      BUSD_BEP20: Wallet,
      USDT_ERC20: Wallet,
    },
  },
  { collection: "users" }
);

const model = mongoose.model("User", UserShema);
module.exports = model;
