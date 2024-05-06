const mongoose=require("mongoose")
const PhtosSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("Photo",PhtosSchema)