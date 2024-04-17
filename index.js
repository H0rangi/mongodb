const express = require("express")
const app = express()

app.use("/api", require("./lib/handler"))

app.listen(3000,()=>{
console.log("serveris up on 3000");
});