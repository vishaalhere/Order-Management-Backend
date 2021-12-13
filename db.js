require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE;


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to Mongo Successfully');
    })
}

module.exports = connectToMongo;