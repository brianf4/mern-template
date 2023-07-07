import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages & components
import Index from './pages/Index'
import Edit from './pages/Edit'
import Add from './pages/Add'


function App() {

  return (
    <>
        <Routes>
              <Route 
                path='/' 
                element={<Index />} 
              />
              <Route 
                exact path='edit/:todoId'
                element={<Edit />}
              />
              <Route 
                exact path='add'
                element={<Add />}
              />
        </Routes>    
    </>
  )
}

export default App