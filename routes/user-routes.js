const userRoutes = require("express").Router();
const userAuth = require("./auth/user-auth");

userRoutes.get("/profile-page", userAuth, (req, res, next) => {
    res.render("auth/user-profilepage", { user: req.session.userInfo });
});

userRoutes.get("/profile-page/settings"),
    (req, res, next) => {
        res.render("/auth/user-profilepage");
    };

module.exports = userRoutes;
