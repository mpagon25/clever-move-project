const userAuth = (req,res,next) => {

    if(req.session.userInfo.role != 'user'){
        res.redirect('/');
        return;
    }else{
        next();
    }    
};


module.exports = userAuth;