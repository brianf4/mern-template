import TodoItem from '../features/posts/TodoItem'
import React, { useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import { fetchTodos, selectAllTodos } from "../features/posts/postsSlice"
import { useDispatch, useSelector } from 'react-redux'

function Index() {
  const dispatch = useDispatch()
  const todos = useSelector(selectAllTodos)
  dispatch(fetchTodos)

  const postStatus = useSelector(state => state.post.status)
  
 
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchTodos())
    }
  }, [postStatus, dispatch])

  const todoItems = todos.map((todo) => {
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