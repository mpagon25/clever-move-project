const adminRoutes = require("express").Router();
const Schedule = require("../models/Schedule.model");
const User = require("../models/User.model");
const { adminDashAuth } = require("./auth/admin-auth");

adminRoutes.get("/admin-dashboard", adminDashAuth, (req, res, next) => {
    Schedule.find()
        .populate('user')
        .populate('addressTo')
        .then((schedules)=>{
            User.find()
                .populate('address')
                .then((users)=>{
                    let popSchedules = [];
                    schedules.forEach((schedule)=>{
                        users.forEach((user)=>{
                            if(schedule.user._id == user.id){
                                                             
                                
                            }

                        });
                        
                                   
                    });                   
                    
                    res.render("auth/admin-dashboard", {user: req.session.userInfo, schedules});
                });          
            
        })
        .catch((err)=>{
            next(err);
        });
    
});

module.exports = adminRoutes;
