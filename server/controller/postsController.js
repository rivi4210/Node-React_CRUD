const Post=require("../models/postsModel")

const createNewPost=async(req,res)=>{
    const { title,body,count}=req.body
    if(!title) return res.status(400).send("title is require!")
    const post=await Post.create({title,body,count})

    res.json(post)
}

const getAllPost=async(req,res)=>{
    const posts=await Post.find().lean()
    res.json(posts)
}

const getPostById=async(req,res)=>{
    const {id}=req.params
    if(!id) return res.status(400).send("id is require")

    const post=await Post.findById(id)
    res.json(post)
}

const updatePost=async(req,res)=>{
    const {_id,title,body}=req.body
    if(!_id) return res.status(400).send("id is require!")
    if(!title) return res.status(400).send("title is require!")

    const post=await Post.findById(_id)
    if (!post) return res.status(400).send("photo isn't exist!")

    post.title=title
    post.body=body

    const update=await post.save()
    res.send(update)
}

const updatePostLike=async(req,res)=>{
    const {count}=req.body
    const {id}=req.params
    if( !id) return res.status(400).send("id is require!")
    const post=await Post.findById(id)
    if(!post) return res.status(400).send("not found")

    post.count=count

    const updateId=await post.save()
    res.json(updateId)
}


const deletePost=async(req,res)=>{
    const {_id}=req.body
    if(!_id) return res.status(400).send("id is require")

    const post=await Post.findById(_id)
    const del=await post.deleteOne()
    res.send(`${del._id} deleted`)
}
module.exports={createNewPost,getAllPost,getPostById,updatePost,updatePostLike,deletePost}