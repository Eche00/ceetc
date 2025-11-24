import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Container />} >
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App