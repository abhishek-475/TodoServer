const tasks = require("../Model/TaskModel")

exports.addTask = async(req,res)=>{
    try{

        const {task } = req.body
        if (!task || task.trim() === "") {
            return res.status(400).json("Task is required" );
        }
        const newTask = new tasks({task})
        await newTask.save()
        res.status(200).json(newTask)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
        
    }
}

exports.getTasks = async(req,res)=>{
    try {
        const allTask = await tasks.find()
        res.status(200).json(allTask)
        
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
        
    }
}



exports.deleteTask = async(req,res)=>{
    try {
        const {id} = req.params
        const deltask = await tasks.findByIdAndDelete(id)
        if(deltask){
            res.status(200).json("Task Removed!!")
        }
        
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
        
    }
}


exports.updateTask = async(req,res)=>{
    try {
        const {id} = req.params
        const {status} =req.body

        const updateTask = await tasks.findByIdAndUpdate(id,{status},{new : true})
        if(updateTask){
            res.status(200).json(updateTask)
        }
        else{
            res.status(400).json("Task Not Found")
        }
        
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
        
    }
}