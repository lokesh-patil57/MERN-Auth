import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
const port = process.env.port || 4000;
const MONGO_URL = 'mongodb://127.0.0.1:27017/mernauth';

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

main()
  .then(() => {
    console.log(`connected to mongoDB`);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("I am Root");
});

app.listen(4000, (req, res) => {
  console.log(`app is listening on port 4000`);
  console.log(`http://localhost:4000`);
});


