import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Hirrd");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on Port: ${PORT}`);
});
