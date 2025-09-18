import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Post = () => {
    const post = useLoaderData()
    return (
        <div className="p-8">
            {/* It's better to have a separate link to go back */}
            <Link to='/' className="text-blue-500 hover:underline mb-6 inline-block">
                &larr; Back to all posts
            </Link>
            
            {/* The content itself shouldn't be a link */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
                <p className="text-gray-700">{post.body}</p>
            </div>
        </div>
    )
}

export default Post

export const singlepostLoader = async ({ params }) => {
    const { id } = params

    // FIX IS HERE: Added https:// and changed quotes to backticks ``
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ message: `Post with ID '${id}' not found.` }),
            { status: 404, statusText: 'Not Found' }
        );
    }

    return response.json()
}