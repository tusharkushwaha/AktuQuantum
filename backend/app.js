const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
// const mongo = require("./db/connection")
const static_path= path.join(__dirname,"/public")
const hbs_path= path.join(__dirname,"views")
// const Student = require("./models/student")
app.use(express.static(static_path))
app.set('view engine', 'hbs');
app.set("views",hbs_path)
app.get("/",(req,res)=>{
     res.render("index")
})
app.get("/about",(req,res)=>{
     res.render("about")
})
app.get("/courses",(req,res)=>{
     res.render("courses")
})
app.get("supportus",(req,res)=>{
     res.render("supportus")
})
app.get("owner",(req,res)=>{
     res.render("owner")
})
app.get("logIn",(req,res)=>{
     res.render("logIn")
})
app.get("*",(req,res)=>{
     res.render("error404")
})
app.listen(port,()=>{
     console.log(`your server is active at the port ${port}`);
})







