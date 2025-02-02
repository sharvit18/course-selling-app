const {Router} = require('express');
const courseRouter = Router();


courseRouter.post("/purchase", (req,res)=>{
    res.json({
        message:"Endpoit to see and purchase a course"
    })

})
courseRouter.get("/preview   ", (req,res)=>{
    res.json({
        message:"Avaliable courses"
    })

})
module.exports = {
    courseRouter: courseRouter
}