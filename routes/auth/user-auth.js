const userAuth = (req, res, next) => {
    if (req.session.userInfo.role != "user") {
        return;
    } else {
        next();
    }
};

module.exports = userAuth;
