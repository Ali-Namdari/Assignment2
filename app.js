const express = require('express')
const app = express()
const port = 8080
app.use(express.json());
const env = require('dotenv').config();

app.get('/foo', (req, res) => {
    res.send('bar')
})

app.post('/hello', (req, res) => {
    res.send("Hello " + req.body.name + "!")
})

app.get('/kill', (req, res) => {
    console.log("Shutting down...")
    server.close();
    res.send("goodbye!")
})

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get('/configValue', (req,res)=> {
    res.send(process.env.config_value);
    console.log(process.env.config_value);
})

app.get('/secretValue', (req,res)=> {
    res.send(process.env.secret_value);
    console.log(process.env.secret_value);
})

app.get('/envValue', (req,res)=> {
    res.send(process.env.env_value);
    console.log(process.env.env_value);
})