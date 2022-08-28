const User = require('../../../Models/User')

const User=require('../Models/User')
const getAllUsers=async(req,res)=>{
try {
    const users=await User.find();
    if(users.length==0){
        res.status(401).json({msg:"your database is empty"})
    }else
    res.status.json({users });
} catch (error) {
    res.status(400).json({msg:"something is wrong"})
}
}

const getOneUser=async(req,res)=>{

}
const addUser=async(req,res)=>{
    const User=req.body
    try {
    
const newUser=new User({
    userName:user.userName,
    email:user.email,
    age:user.age,
        
    });
    await newUser.save()
    res.status(200).json({msg:"user is successfully saved " user:newUser})
     catch (error) {
        
    }

}
const deleteUser=async(req,res)=>{

}
const updateUser=async(req,res)=>{

}
module.exports={getAllUsers,getOneUser,addUser,deleteUser,updateUser}