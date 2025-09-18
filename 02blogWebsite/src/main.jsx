import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import Post, { singlepostLoader } from './components/Posts/Post'
import About from './components/About/About'
import Home, { ListofItems } from './components/Home/Home'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Root />}>
      <Route
        path=''
        loader={ListofItems}
        element={<Home />}>

      </Route>
      <Route
        path='/about'
        element={<About />}>

      </Route>
      <Route
        path='/post/:id'
        element={<Post />}
        loader={singlepostLoader}>

      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
