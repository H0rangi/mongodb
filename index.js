const express = require("express");

const app = express();

app.use("/api",require("./lib/handler"));







app.listen(8888, () => {
  console.log("server is up on 8888");
});