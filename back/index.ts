import express from "express";
import cors from "cors";
import mongoose, { Document, Types } from "mongoose";

import User from "./models/user";

const env = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 4000;

const salt = bcrypt.genSaltSync(10);
const webTokenSalt = "awsgfakhjsvbmnasgfjkhq";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server OK");
});

mongoose.connect(`mongodb+srv://blogApp:${process.env.PASS_ACCESS}@cluster0.s8y8dpk.mongodb.net/
`);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ newUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userRequest: (Document & { _id: Types.ObjectId }) | null =
    await User.findOne({ username });

  if (userRequest) {
    if ("password" in userRequest) {
      const isRegistered = bcrypt.compareSync(password, userRequest.password);
      jwt.sign(
        { username, id: userRequest._id },
        webTokenSalt,
        {},
        (err: Error, token: any) => {
          if (err) throw err;
          res.cookie("token", token).json("ok");
        }
      );
    } else {
      return res.status(400).json({ error: "Password not found for the user" });
    }
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
