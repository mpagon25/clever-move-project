const AddressModel = require('../models/Address.model');
const Schedule = require('../models/Schedule.model');
const scheduleRouter = require('express').Router();


scheduleRouter.get('/schedule',(req, res, next)=>{
  res.render('schedule-form')
})

module.exports = scheduleRouter;