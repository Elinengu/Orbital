//database.js

const mongoose = require('mongoose'); //import connection from mongoose

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            //test123 is the password here
            //testdb is the database na
            'mongodb+srv://Eline:test123@cluster0.o8crjjg.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB Connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};


module.exports = connectDB;