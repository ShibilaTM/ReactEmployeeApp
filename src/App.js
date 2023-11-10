import React from 'react'
import Home from './Components/Home'
import {  Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Dashboard from './Components/Dashboard'
import Empform from './Components/Empform'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dash' element={<Main child={<Dashboard/>}/>}></Route>
        <Route path='/form' element={<Empform/>}></Route>      
      </Routes>
    </div>
  )
}

export default App

