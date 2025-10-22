import React from 'react'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1>
      react with chai
      </h1>
    </UserContextProvider>
  )
}

export default App
