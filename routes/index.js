const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = mongoose.model("Message");

router.get("/list/:page", async (req, res) => {
  let paginate = 10;
  let page = req.params.page || 0;
  const messages = await Message.find({})
    .skip(page  * paginate)
    .limit(paginate);
  res.send(messages);
});

router.get("/single/:id", (req, res) => {
  // TODO:: Get message by an id
});

router.post("/new", async (req, res) => {
    // TODO :: Validate request
  const message = new Message(req.body);
  await message.save();
  res.send(message);
});

module.exports = router;
