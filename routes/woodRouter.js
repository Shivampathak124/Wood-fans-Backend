const express = require("express");
const Wood = require("../models/WoodModel");
const verifyAuth = require("../middlewares/verifyAuth");
const { getWoods, postWoods , deleteWood , updateWood } = require("../controllers/woodsController");

const woodRouter = express.Router();

woodRouter.get("/", verifyAuth,getWoods);

woodRouter.post("/post", verifyAuth, postWoods);
woodRouter.patch("/update/:woodId", verifyAuth, updateWood);

woodRouter.delete("/delete/:woodId", verifyAuth, deleteWood);


module.exports = woodRouter;
