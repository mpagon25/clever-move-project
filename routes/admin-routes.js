const adminRoutes = require("express").Router();
const Schedule = require("../models/Schedule.model");
const User = require("../models/User.model");
const { adminDashAuth } = require("./auth/admin-auth");

adminRoutes.get("/admin-dashboard", adminDashAuth, (req, res, next) => {
    Schedule.find()
        .populate("user")
        .populate("addressTo")
        .then((schedules) => {
            User.find()
                .populate("address")
                .then((users) => {
                    let popSchedules = [];
                    schedules.forEach((schedule) => {
                        users.forEach((user) => {
                            if (schedule.user._id == user.id) {
                                // console.log({addressNew: user.address})
                                schedule.user.address = user.address;
                                popSchedules.push(schedule);
                            }
                        });
                    });

                    res.render("auth/admin-dashboard", {
                        user: req.session.userInfo,
                        popSchedules,
                    });
                });
        })
        .catch((err) => {
            next(err);
        });
});

adminRoutes.post("/admin/:status/:id", (req, res, next) => {
    const { id, status } = req.params;

    if (status == "declined" || status == "accepted") {
        Schedule.findByIdAndUpdate(
            req.params.id,
            { status: req.params.status },
            { new: true }
        )
            .populate("user")
            .populate("addressTo")
            .then((schedule) => {
                console.log(schedule);
                res.redirect("/admin-dashboard");
            })
            .catch((err) => {
                next(err);
            });
    }
});

module.exports = adminRoutes;
