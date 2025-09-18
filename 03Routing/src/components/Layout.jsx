import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* This is where the page content will be rendered */}
      </main>
      <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '20px' }}>
        <p>&copy; 2025 My Awesome Blog</p>
      </footer>
    </div>
    </div>
  )
}

export default Layout
