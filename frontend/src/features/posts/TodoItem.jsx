import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "./postsSlice"

function TodoItem(todo) {
  const dispatch = useDispatch()
  
  function handleDelete() {
    dispatch(deleteTodo(todo.todo._id))
  }

  return (
    <section className="p-4 border-2 border-black w-5/12">
        <section> 
          <h2 className="text-2xl font-semibold">{todo.todo.title}</h2>
          <span>{todo.todo.description}</span>
        </section>
        <section className="flex justify-around items-center gap-x-2">
          <span>{todo.todo.createdAt}</span>
          <Link to={`edit/${todo.todo._id}`}>
            <button className="btn btn-square btn-outline">Edit</button>
          </Link>
          <span 
          onClick={handleDelete}
          className="underline text-red-400 hover:text-red-600 hover:cursor-pointer">Delete</span>
          
        </section>
        
    </section>
  )
}
export default TodoItem