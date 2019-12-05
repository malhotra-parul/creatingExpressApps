const express = require('express');
const app = express();
const port =  process.env.PORT || 7700;
//exporting dbConnect
const dbConnect = require('./dbConnect');

app.get("/", (req, res)=>{
    res.send("From the rest api");
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});

