const express = require("express");
const { userModel } = require("../database/model");

const router = express.Router();

router.post('/newUser', async (req, res) => {
    try {
        const { fullName, phoneNumber, aadharCard, countryCode, address } = req.body;

        const newUser = await userModel.create({
            fullName,
            phoneNumber,
            aadharCard,
            countryCode,
            address,
        });

        console.log("New user created:", newUser);

        res.status(201).json({
            message: "New user created successfully!",
            userId: newUser._id,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;