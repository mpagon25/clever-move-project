
const { Schema, model } = require("mongoose")

require('./Address.model');
require('./User.model');

const scheduleSchema= new Schema({
   user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
  addressTo:{
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
        date: Date,
        description: String
 })

const Schedule = model("user-schedule", scheduleSchema);

module.exports = Schedule;