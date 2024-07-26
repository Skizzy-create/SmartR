const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const chatBotRoute = require("./src/routes/chatBot.js");
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/chat", chatBotRoute);

app.listen(process.env.PORT, () => {
  console.log("hello world");
});
