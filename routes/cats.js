
const { application } = require("express");
const express = require ("express");

const {createCats}=require("../controllers/cats");
const catsRouter=express.Router();

// //post + http://localhost:5000/createCats
catsRouter.post("/",createCats);


module.exports=catsRouter