import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages & components
import Index from './pages/Index'
import Edit from './pages/Edit'


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
        </Routes>    
    </>
  )
}

export default App