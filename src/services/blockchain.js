const { parentPort } = require("worker_threads");
const database = require("../../src/config/childConnectDB");
const Contract = require("web3-eth-contract");
const config = require("../config/blockchain");
const axios = require("../utils/axiosHelp");
const {
  getStatusWallet,
  getStatusHook,
} = require("../modules/user/user.controller");

database.connect();

const listenEventTransfer = (id, nameCoin, nameChain, filter) => {
  const abi = JSON.parse(config[nameChain].coin[nameCoin].abi);
  Contract.setProvider(config[nameChain].provider);
  const contract = new Contract(abi, config[nameChain].coin[nameCoin].address);

  contract.events
    .Transfer({ filter })
    .on("data", function (event) {
      var i = 0;
      getStatusWallet(id).then((res) => {
        console.log({ res });
        if (res === true) {
          sendToTelegram(id, event);
          i++;
        }
        if (i == 0) {
          database.mongoose.connection.close(true).then();
          process.exit();
        }
      });
    })
    .on("error", function (error, receipt) {
      console.log(error);
    });
};

const sendToTelegram = (id, data) => {
  let message = `TXN: ${data.transactionHash}
FROM: ${data.returnValues.from}
TO: ${data.returnValues.to}
VALUE: ${data.returnValues.value}`;
  axios.sendMessage(id, message).then();
};

parentPort.on("message", async (data) => {
  const { id, nameCoin, nameChain, filter } = data;
  listenEventTransfer(id, nameCoin, nameChain, filter);
  console.log(`worker ${id} started`);
});
