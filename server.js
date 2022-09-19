const express = require("express");
require('colors')
const dbConnect = require("./mongodb");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
  res.send(data);
});

app.listen(8080)
