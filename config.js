var config = module.exports;
const mongoose = require("mongoose");
mongoose.Promise=global.Promise; //mongoose query ellam promise ah convert pannum 
const dotenv = require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@clusters.k8lwf.mongodb.net/deliverySystem?retryWrites=true&w=majority`,()=>{
    console.log('connect to mongodb')
})