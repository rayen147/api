const express=reqquire("express");
const app=express();
const userRoute=require('./Routes/UserRoute')
const connectDB=reuire("./config/connectDB")
require("dotenv").config({path :"./config/.env" });
const port=process.env.PORT ||6000;
console.log(process.env.PORT)
app.listen(port,(err)=>{
    (err)?console.log('server is failed'):console.log(`server is running on port ${port}`)
})
connectDB();
//miderlware globale
app.use(express.json())
app.use('/api',userRoute)
