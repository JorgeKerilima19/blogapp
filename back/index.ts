import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server OK");
});
app.post("/register", (req, res) => {
  res.json("Test OK");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
