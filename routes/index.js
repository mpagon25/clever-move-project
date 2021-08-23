const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index", { userInfo: req.session.userInfo });
});

module.exports = router;
