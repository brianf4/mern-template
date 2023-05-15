const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true })

// Database name is established in the .env under MONGO_URI

// 3rd argument of mongoose.model('Todos', todoSchema, 3rd argument) would be the name of the collection.

// Mongo would create the name of the collection for you with whatever database you connected to via .env MONGO_URI

module.exports = mongoose.model('Todos', todoSchema)