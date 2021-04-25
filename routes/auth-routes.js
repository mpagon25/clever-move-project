const authRouter = require('express').Router();

authRouter.post('/login',(req, res, next)=>{

    
});

authRouter.get('/signup',(req,res,next)=>{
    res.render('signup');
});

authRouter.post('/signup',(req,res,next)=>{

});

module.exports = authRouter;