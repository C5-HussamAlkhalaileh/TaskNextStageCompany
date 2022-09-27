//const { createCats } = require("express");
const express = require ("express");

const {createCats}=require("../controllers/cats")
const catsRouter=express.Router();

restaurantRouter.post("/",createResturants);


module.exports=catsRouter;