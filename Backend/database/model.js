const mongooose = require("mongoose");

const userAddressSchema = mongooose.Schema({
    zoneNumber: {
        type: Number,
    },
    wardNumber: {
        type: Number,
    },
    colonyName: {
        type: String,
    },
    Address: {
        type: String,
    }
});

const userDataSchema = mongooose.Schema({
    fullName: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 50,
        trim: true,
        lowercase: true,
    },
    phoneNumber: {
        type: Number,
        maxLenght: 10,
        minLenght: 10,
    },
    aadharCard: {
        type: Number,
        minLenght: 16,
        maxLenght: 16,
    },
    countryCode: {
        type: Number,
        minLenght: 1,
        maxLenght: 3
    },
    address: userAddressSchema
});

const userModel = mongooose.model("User", userDataSchema);

module.exports = {
    userModel
}