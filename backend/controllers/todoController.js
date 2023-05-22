const Todos = require('../models/todoModel')
const mongoose = require('mongoose')

// get all todos
const getTodos = async (req, res) => {
  const todos = await Todos.find({}).sort({createdAt: -1})

  res.status(200).json(todos)
}

// get a single todo
const getTodo = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such todo'})
  }

  const todo = await Todos.findById(id)

  if (!todo) {
    return res.status(404).json({error: "No such todo"})
  }
  res.status(200).json(todo)
}

// create a todo
const createTodo = async (req, res) => {
  const {title, description} = req.body

  // add doc to db
  try {
    const todo = await Todos.create({title, description})
    res.status(200).json(todo)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such todo'})
  }

  const todo = await Todos.findByIdAndDelete({_id: id})

  if (!todo) {
    return res.status(404).json({error: "No such todo"})
  }

  res.status(200).json(todo)
}

// update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such todo'})
  }

  const todo = await Todos.findOneAndUpdate({_id: id}, {
    ...req.body
  }, {new: true})

  if (!todo) {
    return res.status(404).json({error: 'No such todo'})
  }

  res.status(200).json(todo)
}

module.exports = {
  createTodo,
  getTodo,
  getTodos,
  deleteTodo,
  updateTodo
}