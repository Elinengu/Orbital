// mongodb+srv://Eline:test123@cluster0.o8crjjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./testing_models/item.js')

const app = express()

connectDB()

//fetch data from itemModel


app.listen(3000, () => {
    console.log("app is running");
})