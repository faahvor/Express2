import { MongoClient, ServerApiVersion } from "mongodb";


const connectionString = process.env.ATLAS_URI || "";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let conn;
try {
  conn = await client.connect();
  console.log("mongo connected")
} catch (e) {
  console.error(e);
}

let db = conn.db("gmc1");

export default db;