const { Server } = require("socket.io");
const Message = require("./models/chat.model"); // Adjust path based on location
let io;

const setupSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  global.io = io; // So APIs can use `global.io.to(receiverId).emit(...)`

  io.on("connection", (socket) => {
    console.log("User connected: " + socket.id);

    // Join room using user ID
    socket.on("join", (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined their personal room`);
    });

    // Optionally handle real-time sending
    socket.on("sendMessage", async ({ senderId, receiverId, text, type }) => {
      try {
        const newMessage = new Message({ senderId, receiverId, text, type });
        const savedMessage = await newMessage.save();

        // Send to receiver's room
        io.to(receiverId).emit("receiveMessage", savedMessage);
        // Optionally echo back to sender's room too
        io.to(senderId).emit("receiveMessage", savedMessage);
      } catch (error) {
        console.error("Socket message error:", error.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected: " + socket.id);
    });
  });
};

module.exports = setupSocket;
