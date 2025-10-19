import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit() => {

    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            name="" id="" />
            <input type="text" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password' name="" id="" />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login
