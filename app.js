const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/usersRouter");
const woodRouter = require("./routes/woodRouter");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/woods", woodRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
