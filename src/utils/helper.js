const splitKeyCoin = (label) => {
  return label.split("_")[0].toLowerCase();
};

module.exports = {
  splitKeyCoin,
};
