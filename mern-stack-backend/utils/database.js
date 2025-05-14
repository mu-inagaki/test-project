// utils/database.js

const mongoose = require("mongoose")
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://muinagaki:MUosaka011@cluster0.irb5t7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

module.exports = connectDB