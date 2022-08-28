const mongoose=require('mongoose')
require('dotenv').config();
//const url="mongodb+srv://rayen:rayen123@cluster0.gkozpat.mongodb.net/?retryWrites=true&w=majority"
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.URL);
        console.log("db is successfuly connected");

    } catch(error) {
        console.log("connection to db is failed");
    }   


    };
module.exports=connectDB
conncetDB()