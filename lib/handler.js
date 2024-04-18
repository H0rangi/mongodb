const mongoose = require("mongoose");
const express = require("express");

const { Schema } = mongoose;
const schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", schema);
const api = express.Router();

api.post("/create", async (req, res) => {
  try {
    require("./database");
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(400).json({
        message: "user already exists",
      });
    }
    const newuser = await User.create(req.body);
    res.status(200).json({
      message: "user created",
      newuser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

api.get("/get-all", async (req, res) => {
  try {
    require("./database");
    const users = await User.find();

    res.status(200).json({
      message: "found" + users.length,
      users,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

api.get("/get-one/:email", async (req, res) => {
  try {
    require("./database");
    const user = await User.findOne({
      email: req.params.email,
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: "found",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

api.put("/username-update", async (req, res) => {
  try {
    require("./database");
    const update = await User.findOneAndUpdate(
      {
        _id: req.query.id,
      },
      {
        username: req.body.username,
      },{
        new:true
      }
      
    );
    res.status(200).json({
      message: "ok :)",
      update,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

api.delete("/delete", async (req, res) => {
  try {
    require("./database");

    const deleted = await User.findByIdAndDelete(req.query.id)
    if (!deleted) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: "user deleted",
      deleted,
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

api.post ("/send-email", async (req, res) =>{
  try {
    const sender = require("./mailer")
    await sender (req.body.email)
    res.status(200).json({
      message: "email sent",
    })
  } catch (error) {
    res.status(500).json(error)

  }
})
module.exports = api;
