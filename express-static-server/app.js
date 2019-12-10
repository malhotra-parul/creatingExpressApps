const express = require("express");
const config = require("config");
const app = express();
const port = process.env.PORT || config.get("PORT");

//Method 1 : Using expres.static

app.use(express.static("static"));

app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
});

