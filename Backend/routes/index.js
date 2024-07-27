const express = require("express");
const router = express.Router();
const addressRoutes = require("./address");
const chatRoute = require("./chatBot");
const { connectDB } = require("../database/connect");

connectDB();

router.use("/address", addressRoutes);
router.use("/chat", chatRoute);

module.exports = router;
