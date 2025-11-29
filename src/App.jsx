import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import Home from './pages/Home'
import Escrow from './pages/Escrow'
import Properties from './pages/Properties'
import ScrollToTop from './components/ScrollToTop'
import Dashcontainer from './Dashboard/Dashcontainer'
import Dashboard from './Dashboard/Dashboardpages/Dashboard'
import Withdraw from './Dashboard/Dashboardpages/Withdraw'
import Deposit from './Dashboard/Dashboardpages/Deposit'
import CreateEscrow from './Dashboard/Dashboardpages/CreateEscrow'
import EscrowManagement from './Dashboard/Dashboardpages/EscrowManagement'
import PropertyManagement from './Dashboard/Dashboardpages/PropertyManagement'
import DashProperties from './Dashboard/Dashboardpages/DashProperties'
import Transactions from './Dashboard/Dashboardpages/Transactions'
import Profile from './Dashboard/Dashboardpages/Profile'
import Signin from './Auth.jsx/Signin'
import Signup from './Auth.jsx/Signup'
import Forgotpassword from './Auth.jsx/Forgotpassword'

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
          <Route path='/dashboard' element={<Dashcontainer />} >
            <Route path='/dashboard/' element={<Dashboard />} />
            <Route path='/dashboard/withdraw' element={<Withdraw />} />
            <Route path='/dashboard/deposit' element={<Deposit />} />
            <Route path='/dashboard/create-escrow' element={<CreateEscrow />} />
            <Route path='/dashboard/escrow-management' element={<EscrowManagement />} />
            <Route path='/dashboard/properties' element={<DashProperties />} />
            <Route path='/dashboard/property-management' element={<PropertyManagement />} />
            <Route path='/dashboard/transactions' element={<Transactions />} />
            <Route path='/dashboard/profile' element={<Profile />} />

          </Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App