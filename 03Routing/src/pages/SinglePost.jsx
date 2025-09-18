import React from 'react'
import { posts } from '../Data'
import { Link, useParams } from 'react-router-dom'

const SinglePost = () => {
    const {id} = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div>
                <h2>Post not found!</h2>
                <Link to='/'>
                Back to Home</Link>
            </div>
        );
    }




  return (
    <div>
      <Link
      to='/'>Back to all posts</Link>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default SinglePost
