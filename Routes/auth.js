const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Model/user');
const Admin = require('../Model/user');
const router = express.Router();


//user registration

router.post('/register',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            user : username ,
            password : hashedPassword
        });
        await user.save();
        res.status(201).json({message : "User created successfully"});
    } 
    catch (error) {
        res.status(500).json({error : "Registration faild"});
    }
});



module.exports = router;