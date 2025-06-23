import express from "express";
import { vibes } from "./vibes.js";

const app=express();
app.use(express.json());

app.get("/", (req,res)=>{

res.send("welcome to vibecheck api");
});

app.get("/api/v1/vibes",(req,res)=>
{
    res.status(200).json(vibes);
}
);
app.get("/api/v1/vibes/:id",(req,res)=>
{
    const vibeid=parseInt(req.params.id);
    const vibe=vibes.find((v)=>v.id===vibeid);
    if(vibe)
    {
        res.status(200).json(vibe);
    }
    else
    {
        res.status(404).json({
            success:false,
            message:"The vibe not matched",
        });
    }
});
const port=4000;
app.listen(port,()=>
{
    console.log(`Server blasting off on port ${port}`);
});

