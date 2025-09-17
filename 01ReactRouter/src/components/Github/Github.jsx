import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])

    const data = useLoaderData()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Anushka-Singh29')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         }
    //         );
    // }, [])
    return (
        <div className='text-center bg-gray-600 text-white'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture"
                className='text-center' />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Anushka-Singh29')
    return response.json()
}
