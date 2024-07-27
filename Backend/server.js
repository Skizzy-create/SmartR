const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/index")
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1", mainRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
