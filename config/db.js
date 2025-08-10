require("dotenv").config(); // npm install dotenv
const mongoose = require("mongoose");  ; // your mongoDB URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,  {  
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000,
        })
        console.log(`DB is connected to ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;