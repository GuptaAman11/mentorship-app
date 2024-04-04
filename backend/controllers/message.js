const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  const { sender, recipient, content } = req.body;

  try {
    const message = new Message({ sender, recipient, content });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const inboxMessages = async (req, res) => {
  const userId = req.params.userId;

  try {
    const inbox = await Message.find({ recipient: userId }).populate("_id");
    res.json(inbox);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getAllMessages = async(req,res)=> {
try {
    const messages = await Message.find();
    if(!messages){
        return res.status(404 ).json({message:"No Messages Found"});
        }
      res.json(messages);
} catch (err) {
     console.error(err);
     res.status(500).json({ message: "Internal server error" });
}
}

module.exports = {
    sendMessage,
    inboxMessages,
    getAllMessages
}