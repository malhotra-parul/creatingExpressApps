const express = require('express');
const app = express();

const userRoute = require('./routes/user');
const managerRoute = require('./routes/manager');
const adminRoute = require('./routes/admin');

const port = process.env.PORT || 5500;


app.use(express.json({extended : false}));
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/manager', managerRoute);

app.get('/', (req, res) => {
    res.send("Test");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Done");

})

app.listen(port, () => console.log(`Server started on ${port}`));
