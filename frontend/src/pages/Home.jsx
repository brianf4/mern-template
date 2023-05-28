import { useEffect, useState } from "react"
import TodoItem from "../components/TodoItem"
import { Link } from "react-router-dom"
import Add from "../components/Add"

function Home(props) {
  
  const todoItems = props.todoData.map((todo) => {
    return (
      <TodoItem 
        key={todo._id}
        id={todo._id}
        todo={todo}
        logId={logId}
        handleClick={() => logId(todo._id)}
      />
    )
  })

  function logId(id) {
    console.log(id)
  }
  
  
  return (
    <main className="flex flex-col items-center gap-y-20 border-2 border-red-400">
      <Link to='/'>
        <h1 className="text-4xl underline">My todo list</h1>
      </Link>

      <section className="flex flex-col items-center gap-y-4 w-full">
        <section>
          <Add
            todoData={props.todoData}
            setTodoData={props.setTodoData}
          />
        </section>
        <section className="flex flex-wrap gap-4">
          {todoItems}
        </section>
      </section>
        
    </main>
  )
}

export default Home