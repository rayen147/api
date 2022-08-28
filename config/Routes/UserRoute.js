const express=require("express");
const router=express.Router();
const{getAllUsers,getOneUser,addUser,deleteUser,updateUser}=require('../Controllers/userController')
router.get('/user',getAllUsers)
router.get('/user',addUser)

module.exports = router;