import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const movieRoutes = express.Router();

movieRoutes.get("/movies", async (req, res) => {
  const collections = await db.collection("movies");
  const result = await collections.find({}).limit(20).toArray();
  res.status(200).send(result);
});
movieRoutes.get("/embedded_movies", async (req, res) => {
  const collections = await db.collection("embedded_movies");
  const result = await collections.find({}).limit(20).toArray();
  res.status(200).send(result);
});
movieRoutes.get("/users", async (req, res) => {
  const collections = await db.collection("users");
  const result = await collections.find({}).limit(20).toArray();
  res.status(200).send(result);
});
movieRoutes.get("/movies/:id", async (req, res) => {
  const response = new ObjectId(req.params.id);
  const result = await db.collection("movies").findOne({ _id: response });
  res.status(200).send(result);
  // const result = await collections.find({}).limit(20).toArray()
});
movieRoutes.get("/users/:id", async (req, res) => {
    const response = new ObjectId(req.params.id);
    const result = await db.collection("users").findOne({ _id: response });
    if (result){
        res.status(200).send(result)
    }else{
        res.status(400).json("check ur code")
    }
    // const result = await collections.find({}).limit(20).toArray() 
  });
  movieRoutes.post("/users", async(req,res)=>{
    const data = req.body
    let newDocument = {
      _id:new ObjectId()
    }
    newDocument = {...newDocument, ...data};
    const collection = await db.collection("users").insertOne(newDocument)
    res.status(200).send(collection)
  })

export default movieRoutes;
 