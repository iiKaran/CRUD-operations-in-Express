const express = require("express"); 
const router =  express.Router(); 
const {createTodo} = require("../controllers/createTodo"); 
const {getTodo} = require("../controllers/getTodo"); 
const {getSingletodo} = require("../controllers/getSingletodo"); 
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo}= require("../controllers/deleteTodo"); 

// define api route
router.post("/createTodo",createTodo); 
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getSingletodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo); 
module.exports= router ; 

