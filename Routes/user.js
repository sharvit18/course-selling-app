const {Router} = require('express');
const userRouter = Router();
const {userModel} = require("../db");
userRouter.post("/signup", (req,res)=>{
    res.json({
        message:"User signed up"
    })

})
userRouter.post("/signin", (req,res)=>{
    res.json({
        message:"User signed in"
    })

})
userRouter.get("/purchases", (req,res)=>{
    res.json({
        message:"Endpoint to see purchased courses by the user"
    })

})
module.exports = {
    userRouter: userRouter      
}