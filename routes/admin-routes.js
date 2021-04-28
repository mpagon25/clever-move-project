const adminRoutes = require('express').Router();
const { adminDashAuth } = require('./auth/admin-auth');



adminRoutes.get('/admin-dashboard',adminDashAuth,(req,res,next)=>{
    res.render('auth/admin-dashboard');

});

module.exports = adminRoutes;