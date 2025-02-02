const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");
adminRouter.post("/signup", (req,res)=>{
    res.json({
        message:"User signed up"
    })

})
adminRouter.post("/signin", (req,res)=>{
    res.json({
        message:"User signed in"
    })
})

adminRouter.post("/course",(req,res)=>{
    res.json({
        message:"Course creattion endpoint"
    })
})
adminRouter.put("/course",(req,res)=>{
    res.json({
        message:"Course editior endpoint"
    })
})
adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message:"Course viewer endpoint for admin"
    })
})
module.exports = {
    adminRouter : adminRouter
}

