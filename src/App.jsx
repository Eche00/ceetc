import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'
import Properties from './pages/properties'
import Escrow from './pages/Escrow'

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
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