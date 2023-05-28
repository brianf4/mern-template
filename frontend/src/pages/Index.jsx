import TodoItem from "../components/TodoItem"
import { Link, Outlet } from "react-router-dom"
import Add from "../components/Add"

function Index(props) {
  
  const todoItems = props.todoData.map((todo) => {
    return (
      <TodoItem 
        key={todo._id}
        id={todo._id}
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
          <Add
            todoData={props.todoData}
            setTodoData={props.setTodoData}
          />
        </section>
        <section className="flex flex-wrap gap-4">
          {todoItems}
        </section>
      </section>
      <Outlet />  
    </main>
  )
}

export default Index