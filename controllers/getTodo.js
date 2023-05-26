const Todo = require("../models/todo");
exports.getTodo = async (req, res) => {
  try {
    // target is to get all the todos from the mongo dbs

    //  moongose provode various function like create , find by id , find by id and delete and find and update

    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "fetched succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: todos,
      message: "server error",
    });
  }
};
