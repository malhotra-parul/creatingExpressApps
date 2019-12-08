const express = require('express');
const app = express();


app.get("/", (request, response)=>{
    response.send("<h2>Hello from Express!</h2>");
});

app.listen(3200, ()=>{
    console.log('server started at port 3200');
});


