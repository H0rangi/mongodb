const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use("/api",require("./lib/handler"));







app.listen(8888, () => {
  console.log("server is up on 8888");
});