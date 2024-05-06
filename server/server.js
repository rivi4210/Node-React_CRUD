require("dotenv").config() 
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const corsOptions=require("./config/corsOptions")
const connectDB=require("./dbConnetion")

const PORT=process.env.PORT||5225
const app=express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/photos" ,require("./Routs/photosRouts"))
app.use("/users" ,require("./Routs/usersRouts"))
app.use("/todos" ,require("./Routs/toDoRouts"))
app.use("/posts" ,require("./Routs/postRouts"))


mongoose.connection.once('open', () => {
    console.log('Connected to DB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })


// app.listen(PORT,()=>console.log(`port ${PORT}`))