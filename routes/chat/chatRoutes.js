const express = require("express");
const router = express.Router();
const Message = require("../../models/chat.model");
const User = require("../../models/user.model");

// Get chat history between two users
router.get("/:userId/:selectedUserId", async (req, res) => {
  const { userId, selectedUserId } = req.params;
  try {
    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: selectedUserId },
        { senderId: selectedUserId, receiverId: userId },
      ],
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get chat list for a user
router.get("/list/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { senderId: userId },
        { receiverId: userId }
      ]
    });

    const chatUserIds = new Set();
    messages.forEach(msg => {
      if (msg.senderId !== userId) chatUserIds.add(msg.senderId);
      if (msg.receiverId !== userId) chatUserIds.add(msg.receiverId);
    });

    const userIdsArray = [...chatUserIds];

    const users = await User.find({ _id: { $in: userIdsArray } }).select("name email image");

    const chatSummaries = await Promise.all(users.map(async (user) => {
      const lastMsg = await Message.findOne({
        $or: [
          { senderId: userId, receiverId: user._id.toString() },
          { senderId: user._id.toString(), receiverId: userId }
        ]
      }).sort({ timestamp: -1 });

      return {
        userId: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        lastMessageText: lastMsg?.text || "",
        lastMessageTime: lastMsg ? new Date(lastMsg.timestamp).toISOString() : null
      };
    }));

    res.json(chatSummaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Send a message
router.post("/send", async (req, res) => {
  const { senderId, receiverId, text, type } = req.body;

  if (!senderId || !receiverId || !text || !type) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new Message({ senderId, receiverId, text, type });
    const savedMessage = await newMessage.save();

    global.io.to(receiverId).emit("receiveMessage", savedMessage);

    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
