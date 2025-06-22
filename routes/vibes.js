import express from "express";
import Vibes from "../models/Vibe.js";
//import vibes from ".vibes.js";

const router=express.Router();

router.post("/",async(req,res)=>
{
    try{
        const { vibetext,username } = req.body;

    if (!vibetext || !username) {
      return res.status(400).json({ message: "Vibe text  and username are required" });
    }

    const newVibe = await Vibes.create({
      vibetext,username
    });
       

    res.status(201).json(newVibe);
}
catch(err)
{
    res.status(500).json({message:err.message});
}
});


router.get("/",async (req,res)=>{
    try{
        const vibes=await Vibes.find();
        res.status(200).json(vibes);
    }
    catch(err)
    {
        res.status(500).json({message:err.message})
    }
   // res.send("welcome to vibecheck api");
});

// router.get("/",(req,res)=>
// {
//     res.status(200).json(Vibes);
// }
// );

// router.get("/:id",(req,res)=>
// {
//     const vibeid=parseInt(req.params.id);
//     const vibe=Vibes.find((v)=>v.id===vibeid);
//     if(vibe)
//     {
//         res.status(200).json(vibe);
//     }
//     else
//     {
//         res.status(404).json({
//             success:false,
//             message:"The vibe not matched",
//         });
//     }
// });
  export default router;
