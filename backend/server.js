require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const todos = require('./routes/todoRoute')

// express app
const app = express()

// middleware - logs our requests
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/todo', todos)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on port: ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })