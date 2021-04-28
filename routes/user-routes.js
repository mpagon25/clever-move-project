const userRoutes = require('express').Router();
const userAuth = require('./auth/user-auth');




userRoutes.get('/profile-page',userAuth,(req,res,next)=>{
    res.render('auth/user-profilepage', {user: req.session.userInfo});

});

module.exports = userRoutes;