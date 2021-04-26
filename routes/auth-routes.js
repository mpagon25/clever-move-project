const AddressModel = require('../models/Address.model');
const User = require('../models/User.model');

const authRouter = require('express').Router();

authRouter.post('/login',(req, res, next)=>{

    
});

authRouter.get('/signup',(req,res,next)=>{res.render('signup');});

authRouter.post('/signup',(req,res,next)=>{
    const {email, password, street, houseNum, zipCode, city} = req.body;
    const address = {street, houseNum, zipCode, city};
    AddressModel.create(address)
        .then((newAddress)=>{
            return User.create({email, password, address: newAddress._id});                
        })
        .then((newUser)=>{
            console.log('Created User: ' + newUser._id);
        })
        .catch((err)=>{next(err);});



});

module.exports = authRouter;