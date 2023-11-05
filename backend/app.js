const express =require("express")
const app=express();
const mongoose=require("mongoose")
const router=require("./router")
const cors = require('cors')
require("dotenv").config()
app.use(cors())
app.use(express.json());
app.use("/api",router)



mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{
    console.log("connection to db success")
}).catch((err)=>{
console.log(err)
})

app.listen("8080",()=>{
    console.log("I am listening on port number 8080")
})