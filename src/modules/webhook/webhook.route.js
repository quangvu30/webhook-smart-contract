const { Router } = require("express");
const hookMiddlleware = require("./webhook.middleware");
const hookController = require("./webhook.controller");

const router = Router();

router.route("/startWebhook").post(hookController.startWebhook);

router.route("/stopWebhook").post(hookController.stopWebhook);

module.exports = router;
