const express = require("express");

const api = express.Router();

api.get("/test", async (req, res) => {
  try {
    const createCollectionWithSchema = require("./database");
    createCollectionWithSchema()
    .catch(error => console.error("Error creating collection:", error));
    res.status(200).end("connected");
  } catch (error) {
    console.log(error);
    res.status(500).end("error");
  }
});

module.exports = api;