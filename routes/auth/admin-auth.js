const adminDashAuth = (req, res, next) => {
    if (req.session.userInfo.role == "admin") {
        next();
        return;
    } else {
        res.redirect("/");
    }
};

module.exports = { adminDashAuth };
