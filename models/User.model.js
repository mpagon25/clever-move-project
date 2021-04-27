const { Schema, model } = require("mongoose");
require('./Address.model');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: String,
  firstname: String,
  lastname: String,
  address: {
      type: Schema.Types.ObjectId,
      ref: 'Address'
  }
});

const User = model("User", UserSchema);

module.exports = User;
