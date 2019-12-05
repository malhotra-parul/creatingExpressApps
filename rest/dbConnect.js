//Using Mongoose documentation
const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get("mongoURI");
const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

//Method  1  - using function callbacks
// mongoose.connect(mongoURI, options, function(err){
//     if(err){
//         throw err;
//     }
//     console.log("Successfully connected to mongodb!");
// });

 //MEthod 2 - With promises
// mongoose.connect(mongoURI, options)
//     .then(()=> {
//         console.log("Successfully connected to mongo");
//     }, err => {
//         console.log("Something went wrong with mongo!");
//     });

//MEthod 3 - async await
const dbConnect = async() => {
    try{
        await mongoose.connect(mongoURI);
        console.log("Successfully connected!");
    }
    catch(err){
        console.log(err.message);
    }
}
dbConnect();