const express = require('express')


const router = express.Router()

// GET all todos
router.get('/', (req, res)=> {
  res.json({mssg: 'GET all todos'})
})

// GET a single todo
router.get('/id:', (req, res) => {
  res.json({mssg: 'GET a single todo'})
})

// POST a new todo
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new todo'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a new todo'})
})

// UPDATE a workout
router.put('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a new todo'})
})

module.exports = router