import React, { useContext } from 'react'
import UserContext from '../src/context/UserContext'


const Home = () => {

    const {user} = useContext(UserContext)

    return (
        <div>
            <div className="card" style={{ width: 30 + 'rem' }}>
                <img className="card-img-top" src="" />
                <div className="card-body">
                    <h1 className="card-title">{user.username}</h1>
                    <h2 className="card-text">Lorem ipsum dolor sit. </h2>
                    <h4 className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum soluta itaque autem rem! </h4>
                </div>
            </div>
        </div>
    )
}

export default Home
