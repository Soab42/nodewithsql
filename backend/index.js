import express from "express";
import { connection } from "./config/database.js";
import cors from "cors";
const app = express();
const port = 4000;
// Use the cors middleware to allow requests from your React app
app.use(cors()); // Use the cors middleware to
// Middleware to parse JSON request bodies
app.use(express.json());
const db = connection();

app.get("/", async (req, res) => {
  const { User } = await db;
  // console.log(await user.User);
  const data = await User.findAll();
  res.send(data);
});

app.post("/registration", async (req, res) => {
  const { User } = await db;
  try {
    const { name, email, password } = req.body;
    // console.log(req.body);
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
