import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json("hello world " + Date.now());
});

app.get("/api/getdata", (req, res) => {
  setTimeout(() => {
    res.json(Array.from({ length: 5 }, () => Math.ceil(Math.random() * 10)));
  }, 2000);
});

console.log(process.env.PORT);

if (process.env.PORT) {
  app.listen(process.env.PORT);
}

export default app;
