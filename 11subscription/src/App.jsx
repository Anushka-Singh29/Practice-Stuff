import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='subscribe/step1' element={<Step1 />} />
      <Route path='subscribe/step2' element={<Step2 />} />
      <Route path='subscribe/step3' element={<Step3 />}/>
      <Route path='subscribe/step4' element={<Step4 />}/>
    </Routes>
    </BrowserRouter>
      
 
  )
}

export default App
