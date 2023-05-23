import { useEffect, useState } from "react"
import TodoItem from "../components/TodoItem"

function Home() {
  const [todoData, setTodoData] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      // npm install cors and require in backend
      // adjust url as needed
      const res =  await fetch('http://localhost:4000/api/todo') 
      const data = await res.json()

      if (res.ok) {
        setTodoData(data)
      }
    }
    fetchTodos()
  }, [])
  
  const todoItems = todoData.map((todo) => {
    return (
      <TodoItem 
        key={todo._id}
        title={todo.title}
        description={todo.description}
      />
    )
  })
  
  
  return (
    <main className="flex flex-col items-center gap-y-20">
      <h1 className="text-4xl underline">My todo list</h1>
      {todoItems}
    </main>
  )
}

export default Home