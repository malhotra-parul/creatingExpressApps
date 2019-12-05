//Using Mongoose documentation
const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get("mongoURI");
const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

//Method  1  - using function callbacks
mongoose.connect(mongoURI, options, function(err){
    if(err){
        throw err;
    }
    console.log("Successfully connected to mongodb!");
});

//MEthod 2 - With promises
