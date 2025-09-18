import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Home = () => {
    const data = useLoaderData()



    return (
        <div>
            <h1 className='bg-amber-600 text-2xl text-gray-100'>
                List of all Blogs:
            </h1>
            <ul>
                {data.map(data => (
                    <li key={data.id} className='mb-2 pb-2'>
                        <Link to={`/post/${data.id}`}>
                            <h3>
                                {data.title}
                            </h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home

export const ListofItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response) {
        throw new Error("failed to fetchthe list. Please try again later")
    }
    return response.json() //promise return ho raha hai
}
