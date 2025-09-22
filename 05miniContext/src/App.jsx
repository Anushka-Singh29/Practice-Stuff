import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
      <h1>React with Cahi </h1>
    </UserContextProvider>


  )
}

export default App
