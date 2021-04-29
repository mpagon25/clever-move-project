const userAuth = (req, res, next) => {
    if (req.session.userInfo.role == "user") {
        next();
        return;
    } else {
        res.redirect("/");
    }
};

module.exports = { userAuth };
