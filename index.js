import express from 'express';
import cors from 'cors';
const app = express();
import { MongoClient, ServerApiVersion } from 'mongodb';
const port = process.env.PORT || 5000;
import 'dotenv/config'

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.listen(port, () => {
    console.log(`Port open: ${port}`)
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.24iojpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const coffe = client.db("coffedb").collection("AddNew");
    app.post('/addnew', async(req, res)=>{
      const AddNew = req.body;
      console.log(AddNew);
      const result = await coffe.insertOne(AddNew);
      res.send(result);
    })
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
