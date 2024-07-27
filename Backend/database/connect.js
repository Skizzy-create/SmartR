const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL,);
        console.log('MongoDB connection SUCCESS');
    } catch (e) {
        console.error('MongoDB connection FAIL');
        console.log(e);
    }
};

module.exports = {
    connectDB
}