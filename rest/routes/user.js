const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.get("/", (req,res)=>{
    res.send("Users Home Page");
});

router.get("/register", (req,res)=>{
    res.send("Users Registration Page");
});

router.get('/users', ()=>{
    
})
router.post("/register", (req,res)=>{
    //create an object of User
    let user = new User(req.body);
    //log errors
    user.save((err)=>{
        if(err) throw err;
        //if no error, insert data to db
        console.log("Data inserted successfully!");
        res.send(user);
    });
  
});



module.exports = router;