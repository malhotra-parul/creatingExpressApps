const express = require("express");
const path = require("path");
const app = express();
const port = 1212;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res)=>{
    res.render("index", {
        "title" : "abc"
    });
});

app.get("/articles/add", (req, res)=>{
    res.render("article_add", {
        "title" : "Add an Article"
    });
});

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});