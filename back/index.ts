import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import User from "./models/user";

const env = require("dotenv").config();
const bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT || 4000;

const salt = bcrypt.genSaltSync(10);

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
