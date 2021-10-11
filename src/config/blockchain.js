const fs = require("fs");
module.exports = {
  rinkeby: {
    provider: "wss://rinkeby.infura.io/ws/v3/94ecbe40f3944fe0a337c1e5220f02ac",
    coin: {
      busd: {
        address: "0x3FfA97e3840beE637d8431Bd0CA49af1E4a247E1",
        abi: fs.readFileSync(__dirname + "/contractABI/BUSD.json", "utf8"),
      },
    },
  },
  ether: {
    provider: "wss://mainnet.infura.io/ws/v3/94ecbe40f3944fe0a337c1e5220f02ac",
    coin: {
      usdt: {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        abi: fs.readFileSync(__dirname + "/contractABI/USDT.json", "utf8"),
      },
    },
  },
  bsc: {
    provider: "wss://bsc-ws-node.nariox.org:443",
    coin: {
      busd: {
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        abi: fs.readFileSync(__dirname + "/contractABI/BUSD.json", "utf8"),
      },
    },
  },
  testnet: {
    provider: "https://data-seed-prebsc-2-s1.binance.org:8545/",
    coin: {
      busd: {
        address: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
        abi: fs.readFileSync(__dirname + "/contractABI/test.json", "utf8"),
      },
    },
  },
};
