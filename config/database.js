const mongoose = require("mongoose"); 


require("dotenv").config(); 
// to feed all the details of the .env file into the process object


const dbConnect =()=>{
       
       // to make the connection 
       mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
       }).then(()=>{
        console.log("succesfull connection")
       })
       .catch((error)=>{
       console.log("error");
        console.log(error.message); 
        process.exit(1); 
        // 
       })
}
module.exports= dbConnect ; 
// used to export the function