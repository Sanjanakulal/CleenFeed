const mongoose = require("mongoose")
const postschema = new mongoose.Schema({ 
    title:{type:String,required: true},
    description:{type:String,required: true},
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reportCount: { type: Number, default: 0 },
    isFlagged: { type: Boolean, default: false },
     reportedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  reportReasons: [
    {
      type: String
    }
  ],
    postimage:{type:String}
   }, 
   { timestamps: true })

module.exports = mongoose.model("Post",postschema)