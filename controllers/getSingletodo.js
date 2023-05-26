const Todo = require("../models/todo");
exports.getSingletodo = async(req, res)=>{


    try{
        // extract by id 
        // fetch the id from the url 
        const id = req.params.id; 
        const todo = await(Todo.findById({_id:id})); 

        if(!todo){
            res.status(404).json({
                success:false , 
                data :todo,
                message:"no data found ",
            })
        }
            res.status(202).json({
                success:true,
                data:todo, 
                message: "todo found succesfully"
            })
    }
    catch(err){
        console.log(err); 
        res.status(500).json({
            success: false,
            data: [],
            message: "server error",
          });
    }
}