const AddressModel = require('../models/Address.model');
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');

const authRouter = require('express').Router();

authRouter.post('/login',(req, res, next)=>{
    User.findOne({email: req.body.email})
        .then((user)=>{
            if(user){
                console.log('>>> USER EXISTS');
                bcrypt.compare(req.body.password, user.password)
                    .then((isMatching)=>{
                        if(isMatching){
                            req.session.userInfo = user;
                            req.app.locals.isUserLoggedIn = true;
                            res.redirect('/');
                        }
                        else {
                            res.redirect('/');
                            console.error('Login failed');
                        }

                    })
                    .catch((err)=>{
                        next(err);
                    });
            }

        })
        .catch((err)=>{
            next(err);
        });
    
});

authRouter.get('/signup',(req,res,next)=>{
    res.render('signup')
});
 

authRouter.post('/signup',(req,res,next)=>{
    const {email, password, street, houseNum, zipCode, city} = req.body;
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    const address = {street, houseNum, zipCode, city};
    AddressModel.create(address)
        .then((newAddress)=>{
            return User.create({email, password: hash, address: newAddress._id});                
        })
        .then((newUser)=>{
            console.log('>>> Created User: ' + newUser._id);
            res.redirect('/');
        })
        .catch((err)=>{next(err);});



});

module.exports = authRouter;