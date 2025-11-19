import React, { useContext } from 'react'
import UserContext from '../src/context/UserContext'
import {Link} from 'react-router-dom'
import Home from './Home'


const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <h2>Please Login</h2>
        )
    }
    return(
        <div>
            Welcome {user.username}
            <Link to='/home'>Home page</Link>
        </div>
    )

 
}

export default Profile
