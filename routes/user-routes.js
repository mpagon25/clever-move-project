const userRoutes = require("express").Router();
const AddressModel = require("../models/Address.model");
const User = require("../models/User.model");
const { userAuth } = require("./auth/user-auth");
const bcrypt = require('bcryptjs');
const Schedule = require("../models/Schedule.model");
const { populate } = require("../models/Address.model");

userRoutes.get("/profilepage",userAuth, (req, res, next) => {
    res.render("auth/user-profilepage");
});

userRoutes.get("/profilepage/settings",userAuth,(req,res,next)=>{
    res.render("auth/user-settings");
});

userRoutes.get("/profilepage/schedule",userAuth,(req,res,next)=>{
    Schedule.find({user: req.session.userInfo._id})
        .populate('user')
        .populate('addressTo')
        .then((schedule)=>{
            res.render('auth/user-profilepage',{user: req.session.userInfo, schedule});            

        })
        .catch((err)=>{
            next(err);
        });

});

userRoutes.post("/profilepage/settings/:id",userAuth,(req,res,next)=>{
    const { email, password, firstname, lastname, street, houseNum, zipCode, city} = req.body;
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    User.findByIdAndUpdate(req.params.id, { email, password: hash, firstname, lastname }, {new: true})
        .populate('address')
        .then((updatedUser)=>{
            return AddressModel.findByIdAndUpdate(updatedUser.address._id, { street, houseNum, zipCode, city },{new:true})
        })
        .then((updatedAddress)=>{

            User.findById(req.session.userInfo._id)
            .populate('address')
            .then((userPop)=>{

                req.session.userInfo = userPop;
                req.app.locals.loggedUser = req.session.userInfo;
                res.redirect('/profilepage/settings');
            });
        })
        .catch((err)=>{
            next(err);
        });

    
});

module.exports = userRoutes;