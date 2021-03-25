const mongoose= require("mongoose")

const studentSchemea = new mongoose.Schema({
       name:{
            type: String,
            required:true,
            
       },
       age:{
            type:Number,
            min:18,
            required:true
       },
       email:{
            type:String,
            required:true,
            unique:true
            
       },
       phone:{
            type:Number,
            requred:true,
            unique:true
       }

})
const Student = new mongoose.model("Users", studentSchemea)
module.exports=Student