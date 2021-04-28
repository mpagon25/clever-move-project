const adminDashAuth = (req,res,next) => {

    if(req.session.userInfo.role != 'admin'){
        res.redirect('/');
        return;
    }else{
        next();
    }    
};


module.exports = { adminDashAuth };