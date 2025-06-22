import mongoose from"mongoose";
const vibeschema=new mongoose.Schema({
    vibetext:
    {
        type:String,
        required:true
    },
    username:
    {
        type:String,
        required:true

    },
    
});

const Vibes=mongoose.model("Vibes",vibeschema);
export default Vibes;
