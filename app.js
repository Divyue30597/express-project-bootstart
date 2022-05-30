const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router/userRouter");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.all("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/api/v1/user", userRouter);

module.exports = app;
