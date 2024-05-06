const ToDo=require("../models/toDosModel")

const createNewToDo=async(req,res)=>{
    const { title,tags,completed}=req.body
    if(!title) return res.status(400).send("title is require!")
    const toDo=await ToDo.create({ title,tags,completed})

    res.json(toDo)
}

const getAllToDo=async(req,res)=>{
    const toDos=await ToDo.find().lean()
    res.json(toDos)
}


const getToDoById=async(req,res)=>{
    const {id}=req.params
    if(!id) return res.status(400).send("id is require")

    const toDo=await ToDo.findById(id)
    res.json(toDo)
}

const updateToDo=async(req,res)=>{
    const { _id,title,tags,completed}=req.body
    if(!_id) return res.status(400).send("id is require!")
    if(!title) return res.status(400).send("title is require!")

    const toDo=await ToDo.findById(_id)
    if (!toDo) return res.status(400).send("toDo isn't exist!")

    toDo.title=title
    toDo.tags=tags
    toDo.completed=completed

    const update=await toDo.save()
    res.send(update)
}

const updateToDoComplete=async(req,res)=>{
    const {completed}=req.body
    const {id}=req.params
    if( !id) return res.status(400).send("id is require!")
    const toDo=await ToDo.findById(id)
    if(!toDo) return res.status(400).send("not found")

    toDo.completed=completed

    const updateId=await toDo.save()
    res.json(updateId)
}

const deleteToDo=async(req,res)=>{
    const {_id}=req.body
    if(!_id) return res.status(400).send("id is require")

    const toDo=await ToDo.findById(_id)
    const del=await toDo.deleteOne()
    res.send(`${del._id} deleted`)
}
module.exports={createNewToDo,getAllToDo,getToDoById, updateToDo,updateToDoComplete,deleteToDo}