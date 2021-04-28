const adminRoutes = require("express").Router();
const Schedule = require("../models/Schedule.model");
const { adminDashAuth } = require("./auth/admin-auth");

adminRoutes.get("/admin-dashboard", adminDashAuth, (req, res, next) => {
    Schedule.find()
        .populate('user')
        .populate('addressTo')
        .then((schedules)=>{           
            res.render("auth/admin-dashboard", {user: req.session.userInfo, schedules});
        })
        .catch((err)=>{
            next(err);
        });
    
});

module.exports = adminRoutes;
