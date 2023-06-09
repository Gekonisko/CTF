const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const { response } = require("express");
const { MongoClient } = require("mongodb");


const app = express();
app.use(express.json());
app.use(cors());
app.listen(3001, () => {
    console.log("server listening on port 3001")
})

app.post('/login', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const client = new MongoClient("mongodb://localhost:27016");
    await client.connect();
    const db = client.db("Users");
    const collection = db.collection("Users");
    const result = await collection.findOne({ "name": req.body.login });
    client.close();

    console.log((result));
    if (result != null)
        res.end(JSON.stringify({ user: result.name, hasz: result.password }));
})

