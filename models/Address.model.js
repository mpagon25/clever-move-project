const { Schema, model } = require("mongoose");

const AddressSchema = new Schema({
    street: String,
    houseNum: Number,
    zipCode: Number,
    city: String,
});

const AddressModel = model("Address", AddressSchema);

module.exports = AddressModel;
