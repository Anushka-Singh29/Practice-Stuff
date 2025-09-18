import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

return (
  <header className="bg-white shadow-md">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      
      {/* Left Side: Logo */}
      <div className="text-xl font-bold text-gray-800">
        <NavLink to="/">MyLogo</NavLink>
      </div>

      {/* Middle: Navigation Links with Active Styling */}
      <div>
        <ul className="flex items-center space-x-8">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600 transition-colors duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/post'
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600 transition-colors duration-300"
              }
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Side: Button */}
      <div>
        <NavLink to="/" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Go Home
        </NavLink>
      </div>
      
    </nav>
  </header>
  )
}

export default Header
