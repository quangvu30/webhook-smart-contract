const axios = require("axios");

const url = "http://localhost:3000/support-bot/sendMessage";
const headers = {
  token: "2014738813:AAHYsyK8qg_gBMh3mysEE28D3RXniooClGc",
};

const sendMessage = async (telegram_id, message) => {
  try {
    const article = {
      chatId: telegram_id,
      content: message,
    };
    const respone = await axios.post(url, article, { headers });
    return respone;
  } catch (error) {
    console.error("There was an error at postWebhook!", error);
  }
};

module.exports = {
  sendMessage,
};
