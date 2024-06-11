const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    EventTitle: String,
    Venue: String
})

const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel