const AddressModel = require("../models/Address.model");
const UserModel = require("../models/User.model");
const Schedule = require("../models/Schedule.model");
const scheduleRouter = require("express").Router();


scheduleRouter.get('/schedule',(req, res, next)=>{

  AddressModel.findById(req.session.userInfo.address)
    .then((userAddress)=>{
      res.render('schedule-form' , { userAddress , user: req.session.userInfo } )
    })

})


//CREATE-POST
scheduleRouter.post('/schedule',(req, res, next)=>{
  const {  street, houseNum, zipCode ,city , date, description } = req.body
  AddressModel.create({  street, houseNum, zipCode ,city })

      .then((address)=>{

        Schedule.create({ user: req.session.userInfo._id, addressTo : address._id, date, description})
        .then((schedule) => {

          res.redirect(`/schedule/details/${schedule._id}`)
      
        })
        .catch((err)=>{
          next(err)
        })
  })

})

// SCHEDULE DETAILS Route
scheduleRouter.get('/schedule/details/:id', (req, res, next)=>{
 const{id} = req.params

     Schedule.findById(id)
     .populate("user")
     .populate("addressTo")

     .then((schedule) => {

          UserModel.findById(schedule.user._id)
          .populate("address")
          
          .then((user)=>{
      
            res.render('scheduleDetails', {schedule , user})
          })
        

     }).catch((err) => {
       next(err)
     });

}) 

// EDIT SCHEDULE
scheduleRouter.post('/schedule/edit/:id', (req, res, next)=>{
  
})





module.exports = scheduleRouter;
