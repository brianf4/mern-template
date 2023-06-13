import React from "react"
import { Link } from "react-router-dom"

function TodoItem(todo) {
  
  return (
    <section className="p-4 border-2 border-black w-5/12">
        <section> 
          <h2 className="text-2xl font-semibold">{todo.todo.title}</h2>
          <span>{todo.todo.description}</span>
        </section>
        <section className="flex justify-between items-center">
          <span>{todo.todo.createdAt}</span>
          <Link to={`edit/${todo.todo._id}`}>
            <button className="btn btn-square btn-outline">Edit</button>
          </Link>
          
        </section>
        
    </section>
  )
}
export default TodoItem