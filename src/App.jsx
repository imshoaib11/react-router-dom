import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'
import Home from './components/Home'

function App() {
  return <>
      <div id='wrapper'>
      <BrowserRouter>
         <NavBar />
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/full-stack" element={<FullStack/>} />
      <Route path="/data-science" element={<DataScience/>} />
      <Route path="/cyber-security" element={<CyberSecurity/>} />
      <Route path="/ui-ux" element={<Career/>} />
      <Route path="*" element={<Navigate to="/home"/>}/>
      </Routes>
      </BrowserRouter>

      </div>
  </>
    
  
}

export default App