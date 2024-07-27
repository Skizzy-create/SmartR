const mongoose = require("mongoose");

const userAddressSchema = mongoose.Schema({
    zoneNumber: {
        type: Number,
    },
    wardNumber: {
        type: Number,
    },
    colonyName: {
        type: String,
    },
    cityName: {
        type: String,
    },
    street: {
        type: String,
    },
    locality: {
        type: String,
    },
    propertyId: {
        type: Number,
    },
    postalCode: {
        type: Number,
    },
    propertyType: {
        type: Boolean, // true means commercial, false means residential
    }
});

const userDataSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true,
        lowercase: true,
    },
    phoneNumber: {
        type: Number,
        maxLength: 10,
        minLength: 10,
    },
    aadharCard: {
        type: Number,
        minLength: 16,
        maxLength: 16,
    },
    countryCode: {
        type: Number,
        minLength: 1,
        maxLength: 3,
    },
    address: userAddressSchema
});

const userModel = mongoose.model("User", userDataSchema);

module.exports = {
    userModel
};
