import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'
import Escrow from './pages/Escrow'
import Properties from './pages/Properties'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Container />} >
            <Route path='/' element={<Home />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/escrow' element={<Escrow />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App