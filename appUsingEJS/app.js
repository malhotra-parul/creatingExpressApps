const express = require("express");
const app = express();
const path = require("path");
const port = 2424;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var data = {
    name: "Parul",
    hobbies: ["Styling", "coding", "listening to music"]
}
app.get("/", (req, res)=>{
    res.render("home", {
        data: data
    });
})

app.listen(port, ()=>{
console.log(`Server started at port ${port}`);
});
