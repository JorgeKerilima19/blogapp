import express, { Response, Request } from "express";
import cors from "cors";
import mongoose, { Document, Types } from "mongoose";

import UserModel, { User } from "./models/user";
import PostModel, { Post } from "./models/post";

const env = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");

const uploadMiddleware = multer({ dest: "uplodes/" });

const app = express();
const port = process.env.PORT || 4000;

const salt = bcrypt.genSaltSync(10);
const webTokenSalt = process.env.SALT;

app.use(cors({ origin: "http://localhost:5000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server OK");
});

mongoose.connect(`mongodb+srv://blogApp:${process.env.PASS_ACCESS}@cluster0.s8y8dpk.mongodb.net/
`);

app.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const newUser = await UserModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ newUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const userRequest: User | null = await UserModel.findOne({ username });

    if (userRequest) {
      const isPasswordValid: boolean = await bcrypt.compare(
        password,
        userRequest.password
      );

      if (isPasswordValid) {
        const token: string = jwt.sign(
          { username: userRequest.username, id: userRequest._id },
          webTokenSalt
        );

        res
          .cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          })
          .json("Login successful");
      } else {
        return res.status(400).json({ error: "Invalid password" });
      }
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
});

app.get("/profile", async (req: Request, res: Response) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  jwt.verify(token, webTokenSalt, {}, (err: Error, info: any) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.json(info);
  });
});

app.post("/logout", (req: Request, res: Response) => {
  res.cookie("token", "").json("Logged Out");
});

app.post(
  "/post",
  uploadMiddleware.single("files"),
  async (request: Request, response: Response) => {
    const originalname: any = request.file?.originalname;
    const path: any = request.file?.path;

    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;

    fs.renameSync(path, newPath);

    const { header, summary, content } = request.body;

    const postDoc = await PostModel.create({
      title: header,
      summary,
      content,
      cover: newPath,
    });

    response.json({ header, summary, content, cover: newPath });
  }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
