const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type:String, unique:true},
    password:String , 
    firstName: String,
    lastName: String

});
const courseSchema = new Schema({
    title:String,
    description:String,
    price: Number,
    imageUrl:String,
    creatorId : objectId

});
const adminSchema = new Schema({
    email: {type:String, unique:true},
    password:String , 
    firstName: String,
    lastName: String
});
const purchaseSchema = new Schema({});

const userModel = mongoose.model("user",userSchema);
const courseModel = mongoose.model("course",courseSchema);
const adminModel = mongoose.model("admin",adminSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel

}
