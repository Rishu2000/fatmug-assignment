const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

const knex = require('knex')({
    client:'pg',
    connection:'postgres://postgres:rishavpgsql@localhost:5432/example_db'
});
app.get('/', (req,res) => {
    res.json("server is on")
})
app.post('/', (req,res) => {
    res.json(req.body)
    knex('example_db_table')
        .insert({name: req.body.name, password: req.body.password, email: req.body.email})
        .then(() =>{
            console.log("Data has been inserted successfully.")
        })
})

app.listen(port,() => {
    console.log("server is listening to the port "+port);
})