const express  = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { userRouter } = require("./Routes/user");
const { courseRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");

const app = express();
app.use(express.json());

app.use("/admin",adminRouter)   
app.use("/user",userRouter)
app.use("/course",courseRouter)


async function main() {
    try {
       
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database successfully");

       
        const port = process.env.PORT || 3000;  
        
       
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
       
        console.error("Failed to connect to the database or server", error);
    }
}
main();