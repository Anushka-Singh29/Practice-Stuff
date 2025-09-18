import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../Data'


const HomePage = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className='mb-3'>
                        <Link
                            to={`/posts/${post.id}`}
                            rel="stylesheet" href="">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage
