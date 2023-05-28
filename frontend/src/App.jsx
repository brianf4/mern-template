import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages & components
import Index from './pages/Index'
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

  function logId(id) {
    console.log(id)
  }


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route 
            path='/' 
            element={
              <Index 
                todoData={todoData} 
                setTodoData={setTodoData}
              />
            } 
          />
            
          <Route 
            path='edit/:todoId'
            element={
              <Edit 
                todoData={todoData}
                logId={logId}
              />
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App