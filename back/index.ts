import express from "express";
import cors from "cors";

const env = require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server OK");
});
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  res.json({ requestData: { username, password } });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log(process.env.PASS_ACCESS);
