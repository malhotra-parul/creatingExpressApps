const express = require('express');
const app = express();
const port =  process.env.PORT || 7700;
const userRoute = require('./routes/user')
//exporting dbConnect
const dbConnect = require('./dbConnect');
app.use(express.json({extended: false}));
app.use("/user", userRoute);

app.get("/", (req, res)=>{
    res.send("From the rest api");
})



app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});

