const Photo=require("../models/photosModel")

const createNewPhotos=async(req,res)=>{
    const { title,imgUrl}=req.body
    if(!title) return res.status(400).send("title is require!")
    const photo=await Photo.create({title,imgUrl})

    res.json(photo)
}

const getAllPhotos=async(req,res)=>{
    const photos=await Photo.find().lean()
    res.json(photos)
}

const getPhotoById=async(req,res)=>{
    const {_id}=req.params
    if(!_id) return res.status(400).send("id is require")

    const photo=await Photo.findById(_id)
    res.json(photo)
}

const updatePhoto=async(req,res)=>{
    const {_id,title,imgUrl}=req.body
    if(!_id) return res.status(400).send("id is require!")
    if(!title) return res.status(400).send("title is require!")

    const photo=await Photo.findById(_id)
    if (!photo) return res.status(400).send("photo isn't exist!")

    photo.title=title
    photo.imgUrl=imgUrl

    const update=await photo.save()
    res.send(update)
}

const deletePhoto=async(req,res)=>{
    const {_id}=req.body
    if(!_id) return res.status(400).send("id is require")

    const photo=await Photo.findById(_id)
    const del=await photo.deleteOne()
    res.send(`${del._id} deleted`)
}
module.exports={createNewPhotos,getAllPhotos,getPhotoById,updatePhoto,deletePhoto}