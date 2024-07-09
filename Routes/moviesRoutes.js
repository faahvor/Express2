import express from "express"
import db from "../db/conn.js";

const movieRoutes = express.Router();

movieRoutes.get("/",async(req,res)=>{
    const collections = await db.collection("movies")
    const result =await collections.find({}).limit(20).toArray();
    res.status(200).send(result)
})

export default movieRoutes;