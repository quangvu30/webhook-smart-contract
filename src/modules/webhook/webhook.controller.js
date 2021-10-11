const userController = require("../user/user.controller");
const { Worker } = require("worker_threads");
let listWorker = new Map();

const startWebhook = async (req, res) => {
  const { telegram_id } = req.body;
  try {
    if (!listWorker.has(telegram_id)) {
      // start worker
      const userData = await userController.getDataForHook(telegram_id);
      const data = {
        id: telegram_id,
        nameCoin: userData.coin,
        nameChain: userData.chain,
        filter: {
          to: userData.wallet,
        },
      };
      const worker = new Worker("./src/services/blockchain.js");
      worker.postMessage(data);
      listWorker.set(telegram_id, worker);
      res.json({
        status: "success",
      });
    } else {
      res.json({
        status: "success",
        data: "Worker is existed",
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      error: error,
    });
  }
};

const stopWebhook = async (req, res) => {
  try {
    const { telegram_id } = req.body;
    await listWorker.get(telegram_id).terminate();
    listWorker.delete(telegram_id);
    await userController.deactiveWebhook(telegram_id);
    res.json({
      status: "success",
      data: "Stop webhook is success",
    });
  } catch (error) {
    res.json({
      status: "error",
      error: error,
    });
  }
};

module.exports = {
  startWebhook,
  stopWebhook,
};
