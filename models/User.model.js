const { Schema, model } = require("mongoose");
require("./Address.model");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        // unique: true -> Ideally, should be unique, but its up to you
    },
    firstname: String,
    lastname: String,
    password: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
    },
    role: String,
});

const User = model("User", UserSchema);

module.exports = User;
