const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3500;

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req,res)=>{
    var text = `Thank you for your query  "${req.body.comment}", ${req.body.fname}. We will get back shortly.`;
    var final_text = `*Hello There*%0A${text}`;
    res.redirect(`https://wa.me/${req.body.phone}?text=${final_text}`);
});

app.listen(port, () => console.log(`Server started on ${port}`));
