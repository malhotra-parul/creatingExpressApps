const express = require('express');
const app = express();

const userRoute = require('./routes/user');
const managerRoute = require('./routes/manager');
const adminRoute = require('./routes/admin');
const auth = require('./auth');

const port = process.env.PORT || 5500;


app.use(express.json({extended : false}));
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/manager', managerRoute);

//for all the api methods
app.all("/all/:username", (req, res, next) => {
    console.log(req.params);
    res.send("hello from all!");
});

app.get("/hit", auth, (req, res, next)=>{
    console.log("I am second!");
    res.send("Dummy auth!");
})

app.get('/', (req, res) => {
    res.send("Test");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Done");

});



app.listen(port, () => console.log(`Server started on ${port}`));
