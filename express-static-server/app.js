const express = require("express");
const config = require("config");
const serveIndex = require("serve-index");
const app = express();
const port = process.env.PORT || config.get("PORT");


//Method 2 Directory Listing with serve-index

//Option 1 : To Enforce index file in the display list
app.use(serveIndex('static2', {'icons': true}),express.static("static2"));

//Option 2 : To have an index listing
// If no index file
// app.use(serveIndex(express.static("static2"),'static2', {'icons': true}));



// //Method 1 : Using expres.static


//To serve from different route
// app.use("/app",express.static("static"));



app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
});

