const mongoose = require("mongoose")
const userschema = new mongoose.Schema({ 
    name: { type: String },
    email: { type: String ,required:true,unique:true},
    password: { type: String,required:true },
    phone: { type: Number },
    address: { type: String },
    trustScore: {
   type: Number,
   default: 50
}
})


module.exports = mongoose.model("User", userschema)