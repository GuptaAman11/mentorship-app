const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  const senderId = req.user.user._id;
  const receiverId = req.params.receiverId;
  const { content } = req.body;

  try {
    const message = new Message({
      sender: senderId,
      recipient: receiverId,
      content: content,
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const inboxMessages = async (req, res) => {
  const user = req.user.user._id;
  console.log(user);

  try {
    const inbox = await Message.find({ recipient: user }).populate('sender')
    res.json(inbox);
    console.log(inbox)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (!messages) {
      return res.status(404).json({ message: "No Messages Found" });
    }
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  sendMessage,
  inboxMessages,
  getAllMessages,
};
