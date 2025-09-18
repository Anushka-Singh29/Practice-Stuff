import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SinglePost from './pages/SinglePost'
import NotFoundPage from './pages/NotFoundPage'
import About from './pages/About'


const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        <Route
          path='/' element={<Layout />}>
            <Route path='' element={<HomePage/>} />
            <Route path='about' element={<About/>} />
            <Route path='posts/:id' element={<SinglePost/>} />
            <Route path='*' element={<NotFoundPage/>} />
          
          </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
