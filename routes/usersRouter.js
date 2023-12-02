const express = require("express");
const checkUser = require("../middlewares/checkUser")
const { getUser, signup, login } = require("../controllers/userController");
const verifyAuth = require("../middlewares/verifyAuth");

const userRouter = express.Router();
userRouter.get("/", verifyAuth, getUser);
userRouter.post("/signup", checkUser, signup );
userRouter.post("/login", login);

module.exports = userRouter;
