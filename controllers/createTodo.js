const Todo = require("../models/todo"); 

// route handler to handle that from which route u come here

exports.createTodo = async(req, res)=>{

    try{
        // body of the req will contain the title and the description 

        const {title, description} = req.body; 

        // create a new todo object and insert to db
        const response = await Todo.create({title,description});
        // .create method will insert the data to the db 
        // send a json respnse
        res.status(200).json(
         {   success:true , 
            data:response, 
            message :"created"
        }
        ); 

    }
    catch(err){
         console.error(err); 
         res.status(500).json({
            success:false,
            data:"internal error", 
            message:err.message,
         })
    }
}