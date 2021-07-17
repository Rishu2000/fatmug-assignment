const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const knex = require('knex')({
    client:'pg',
    connection:'postgres://postgres:rishavpgsql@localhost:5432/example_db'
});
app.get('/', (req,res) => {
    res.json("server is on")
})
app.post('/register', (req,res) => {
    knex('example_db_table')
        .insert({name: req.body.name, password: req.body.password, email: req.body.email})
        .then(() =>{
            res.status(200).json({
                "Authintication":true
            })
            console.log("Data has been inserted successfully.")
        })
        .catch(err =>{
            res.status(402).json({
                "Authintication":false
            })
        })
})
app.post('/login', (req,res) => {
    knex('example_db_table')
        .where({email: req.body.email, password: req.body.password})
        .then((rows) => {
            if(rows.length === 1) {
                rows.map((row) => {
                    console.log(row)
                    res.status(200).json({
                        "Authintication":true,
                        "name":row.name
                    })
                })
            }else{
                res.status(401).json({
                    "Authintication":false
                })
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({
                "Authintication":true
            })
        })
})

app.listen(port,() => {
    console.log("server is listening to the port "+port);
})