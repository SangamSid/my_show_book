const express =require("express")
const app=express();
const mongoose=require("mongoose")
const router=require("./router")
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use("/api",router)


mongoose.connect("mongodb://127.0.0.1:27017/bookmyshow",{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{
    console.log("connection to db success")
}).catch((err)=>{
console.log(err)
})

app.listen("8080",()=>{
    console.log("I am listening on port number 8080")
})