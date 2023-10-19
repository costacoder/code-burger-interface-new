import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Products, Register, Login } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  console.log('MyRoutes está ok...')
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Products />} path="/produtos" />
        <Route path="*" element={<Home />}>
          <Route path="*" element={<PrivateRoute />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
