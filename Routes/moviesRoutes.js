import express from "express"

const movieRoutes = express.Router();

movieRoutes.get("/",(req,res)=>{
    res.send("hello world")
})

export default movieRoutes;