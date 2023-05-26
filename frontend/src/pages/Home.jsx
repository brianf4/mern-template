import { useEffect, useState, useRef } from "react"
import TodoItem from "../components/TodoItem"
import { Link } from "react-router-dom"
import Add from "../components/Add"

function Home() {
  const [todoData, setTodoData] = useState([])
  const {current: arr} = useRef(todoData)
  

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
    console.log('effect ran')
  }, [arr])
  
  const todoItems = todoData.map((todo) => {
    return (
      <TodoItem 
        key={todo._id}
        todo={todo}
      />
    )
  })
  
  
  return (
    <main className="flex flex-col items-center gap-y-20 border-2 border-red-400">
      <Link to='/'>
        <h1 className="text-4xl underline">My todo list</h1>
      </Link>

      <section className="flex flex-col items-center gap-y-4 w-full">
        <section>
          <Add />
        </section>
        <section className="flex flex-wrap gap-4">
          {todoItems}
        </section>
      </section>
        
    </main>
  )
}

export default Home