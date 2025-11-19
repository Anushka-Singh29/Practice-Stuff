import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from '../components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
      
      <h1>React and coding</h1>
      <Login />
      <Profile />
      <Routes>
        <Route path='home' element={<Home />} />
      </Routes>
      {/* <Home /> */}
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
