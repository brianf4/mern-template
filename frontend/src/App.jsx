import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages & components
import Home from './pages/Home'
import Edit from './pages/Edit'


function App() {
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


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <Home 
                todoData={todoData}
                setTodoData={setTodoData}
                
              />
            }
          />
          <Route 
            path='edit'
            element={
              <Edit 
                todoData={todoData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App