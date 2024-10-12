import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Hirrd");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
