const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const { Color } = require("colors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
/*
the commented code is now fulfilled our testing api purpose 
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
*/

//
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`sever is listening on ${PORT}`.bgRed.green);
});
module.exports = app;
