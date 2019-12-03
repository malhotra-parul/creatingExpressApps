const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3300;

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    var text = `Welcome! ${req.body.fname} ${req.body.lname}. 
    Your email id is ${req.body.email}. Thank you for your messsage - ${req.body.comment}`;
    res.send(text);
});

app.listen(port, () => console.log(`Server started on ${port}`));
