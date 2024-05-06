const mongoose = require("mongoose")

const postsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    count: {
        type:Number
    }
},

    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postsSchema)