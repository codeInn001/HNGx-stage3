import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import Gallery from './components/Gallery'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    
    <div className='m-8 m-w-3/5 padding-8'>
      <Routes>                                                                        
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>  
    </div>
    
  )

}

export default App
