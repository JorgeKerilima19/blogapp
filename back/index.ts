import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import User from "./models/user";

const env = require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

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
    const newUser = await User.create({ username, password });
    res.json({ newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
