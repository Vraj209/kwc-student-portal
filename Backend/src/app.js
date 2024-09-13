import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN);
app.options('*', cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public/temp"));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/users",userRouter)

export { app };
