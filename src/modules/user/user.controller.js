const User = require("./user.model");
const helper = require("../../utils/helper");

const enableWebhook = async (telegram_id) => {
  const user = await User.findOne({ "telegram.id": telegram_id });
  user.webhook.inactive = false;
  await user.save();
};

const deactiveWebhook = async (telegram_id) => {
  const user = await User.findOne({ "telegram.id": telegram_id });
  user.webhook.inactive = true;
  await user.save();
};

const getTokenVerify = async (telegram_id) => {
  const user = await User.findOne({ "telegram.id": telegram_id });
  return user.webhook.tokenVerify;
};

const getDataForHook = async (telegram_id) => {
  const user = await User.findOne({ "telegram.id": telegram_id });
  let data = {};
  Object.keys(user.wallet).forEach((el) => {
    if (user.wallet[el].isListen) {
      // get nameCoin , nameChain, wallet
      switch (helper.splitKeyCoin(el)) {
        case "usdt":
          data.coin = "usdt";
          data.chain = "ether";
          data.wallet = user.wallet[el].address;
          break;
        case "busd":
          data.coin = "busd";
          data.chain = "rinkeby";
          data.wallet = user.wallet[el].address;
          break;
      }
      return data;
    }
  });

  // set webhook is listening
  user.webhook.inactive = false;

  return data;
};

const getStatusHook = async (telegram_id) => {
  const user = await User.findOne({ "telegram.id": telegram_id });
  return user.webhook.inactive;
};

const getStatusWallet = async (telegram_id) => {
  const user = await User.findOne({ "telegram.id": telegram_id });
  var res = false;
  Object.keys(user.wallet).forEach((el) => {
    if (user.wallet[el].isListen == true) {
      res = true;
    }
  });
  return res;
};

module.exports = {
  enableWebhook,
  deactiveWebhook,
  getTokenVerify,
  getDataForHook,
  getStatusHook,
  getStatusWallet,
};
