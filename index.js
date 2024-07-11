import express from "express";
import data from "./data/data.json" assert { type: "json" };
import movieRoutes from "./Routes/moviesRoutes.js";

const app = express();
const PORT = 7777;

//middleware
app.use(express.json());
app.use("/movie", movieRoutes)

app.get("/", (req, res) => {
  res.send("Hello World");
  
});
app.post("/fruits",(req,res)=>{
    console.log(req.body);
    const body = req.body
    data.push(body)
    console.log(data);
    res.send("successfully pushed")
    
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})