const express = require("express");
const Wood = require("../models/WoodModel");
const verifyAuth = require("../middlewares/verifyAuth");
const { getWoods, postWoods } = require("../controllers/woodsController");

const woodRouter = express.Router();

woodRouter.get("/", verifyAuth,getWoods);

woodRouter.post("/post", verifyAuth, postWoods);

module.exports = woodRouter;
