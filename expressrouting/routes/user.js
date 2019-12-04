const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    res.send("I am from User hoomepage.");
});

router.get('/login', (req, res)=>{
    res.send("I am from User Login hoomepage.");
});


router.get('/login/:email/:city', (req, res)=>{
    res.send(req.params);
});
module.exports = router;