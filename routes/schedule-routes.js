const AddressModel = require("../models/Address.model");
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

        console.log(address)

        Schedule.create({ user: req.session.userInfo._id, addressTo : address._id, date, description})
        .then((schedule) => {

          console.log("SCHEDULE CREATED",{ schedule })

          res.redirect('/schedule/details')
      
        })
        .catch((err)=>{
          next(err)
        })
  })

})

//EDIT SCHEDULE Route
scheduleRouter.get('/schedule/details', (req, res, next)=>{
   Schedule.find()
   .then((schedule) => {
      res.render('scheduleDetails', {schedule})
   }).catch((err) => {
     next(err)
   });
}) 



module.exports = scheduleRouter;
