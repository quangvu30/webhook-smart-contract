const { Worker } = require("worker_threads");

const listWorker = new Map();

//Create new worker
const worker = new Worker("./blockchain.js");
const data = {
  id: "123",
  nameCoin: "usdt",
  providerName: "ether",
  filter: {},
};

const terminateWorker = async (id) => {
  let res = listWorker.get(id).terminate();
  listWorker.delete(id);
  console.log({ res });
};

worker.postMessage(data);
