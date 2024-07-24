import express from "express";
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`Welcome to my server!`)
})

app.listen(port, () =>{
    console.log(`Server running on the port ${port}`)
})