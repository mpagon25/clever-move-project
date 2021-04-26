
const { Schema, model } = require("mongoose")
require('./Address.model');

const scheduleSchema= new Schema({
  firstname: String,
  lastname:String,
        from: {
            type: Schema.Types.ObjectId,
            ref: 'Address'
        },
        to:  {
            type: Schema.Types.ObjectId,
            ref: 'Address'
        },
        description: String
    })

const Schedule = model("user-schedule", scheduleSchema);

module.exports = Schedule;