const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/', (req,res) => {
    res.json("server is on")
})

app.listen(port,() => {
    console.log("server is listening to the port "+port);
})