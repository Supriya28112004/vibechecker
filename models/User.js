import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide valid username"]
    },
    email:
    {
        type:String,
        required:[true,"please enter vaild email id"],
        unique:true
    },
    password:
    {
        type:String,
        required:[true,"please enetr vaild password"]
    }

});
const Users=mongoose.model("Users",userschema);

export default  Users;


