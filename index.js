 // create a flow in index.js 
 const express = require("express"); 
 const app = express(); 
require("dotenv").config(); 
const PORT = process.env.PORT || 8000 ; 
// parsing of the post request that is middle ware to parse the json request body
app.use(express.json()); 
// parser 
// now handle the route 
// importing the routes for todoapi 
const todoRoutes = require("./routes/todo"); 
// fetching the route that is mapped to the controller
// mount the route 
app.use("/api/vi",todoRoutes); 
// starting the server
app.listen(PORT,()=>{
    console.log(`server started a  at ${PORT}`);
})
// connect the db 
const dbConnect = require("./config/database"); 
dbConnect(); 
app.get("/",(req,res)=>{
    res.send("homepage"); 
})