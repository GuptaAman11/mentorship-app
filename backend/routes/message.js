const express = require("express");
const { sendMessage, inboxMessages, getAllMessages } = require("../controllers/message");
const router = express.Router();


router.post("/send", sendMessage);

router.get("/inbox/:userId", inboxMessages);
router.get("/allMessages",getAllMessages);

module.exports = router;
