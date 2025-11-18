import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from '../components/Home'


const App = () => {
  return (
    <UserContextProvider>
      <h1>React and coding</h1>
      <Login />
      <Profile />
      <Home />
    </UserContextProvider>
  )
}

export default App
