const { Router } = require("express");
const router = Router();

router.use("/webhook", require("./webhook/webhook.route"));

module.exports = router;
