const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/aktu-student", {
     useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true
}).then(()=>{
     console.log("Connection succesful");
}).catch(()=>{
     console.log("Error in connection");
})