const router=require("express").Router();
const myModel=require("./schema")


router.post("/booking",async(req,res)=>{

    try{
        const user=new myModel({
            movie:req.body.movie,
            slot:req.body.slot,
            seats:req.body.seats
        })
        const data= await user.save();
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err)
    }
 
})

router.get("/booking",async(req,res)=>{

    try{
        const data= await myModel.find().sort({_id:-1}).limit(1)
        // console.log("my data",data.length)
        if (data.length==0){
            res.status(200).json([]);
        }
        else{
            res.status(200).json(data)
        }
        
    }
    catch(err){
        res.status(500).json(err);
    }
    

})


module.exports=router