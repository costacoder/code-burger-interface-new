import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function MyRoutes() {
  console.log('MyRoutes está ok...')
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route path="*" element={<Home />}>
          <Route path="*" element={<PrivateRoute />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
