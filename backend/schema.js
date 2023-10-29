const mongoose=require("mongoose");

const myShowSchema=new mongoose.Schema({

movie:{
    type:String,
    required:true
},
slot:{
    type:String,
    required:true
},
seats:{
    A1: Number,
    A2: Number,
    A3: Number,
    A4: Number,
    D1: Number,
    D2: Number
}
})

const myModel=mongoose.model("BookMyShow",myShowSchema)
module.exports=myModel