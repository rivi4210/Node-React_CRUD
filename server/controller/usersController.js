const User=require("../models/userModel")

const createNewUser=async(req,res)=>{
    const {name,userName,email,address,phone}=req.body
    if(!name) return res.status(400).send("name is require!")
    if(!userName) return res.status(400).send("userName is require!")
    const user=await User.create({name,userName,email,address,phone})
    res.json(user)
}

const getAllUser=async(req,res)=>{
    const users=await User.find().lean()
    res.json(users)
}

const getUserById=async(req,res)=>{
    const {_id}=req.params
    if(!_id) return res.status(400).send("id is require")

    const user=await User.findById(_id)
    res.json(user)
}

const updateUser=async(req,res)=>{
    const {_id,name,userName,email,address,phone}=req.body
    if(!_id) return res.status(400).send("id is require!")
    if(!name) return res.status(400).send("name is require!")

    const user=await User.findById(_id)
    if (!user) return res.status(400).send("user isn't exist!")

    user.name=name
    user.userName=userName
    user.email=email
    user.address=address
    user.phone=phone

    const update=await user.save()
    res.send(update)
}

const deleteUser=async(req,res)=>{
    const {_id}=req.body
    if(!_id) return res.status(400).send("id is require")

    const user=await User.findById(_id)
    const del=await user.deleteOne()
    res.send(`${del._id} deleted`)
}
module.exports={createNewUser,getAllUser,getUserById,updateUser,deleteUser}