import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Products, Register, Login, Cart } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Home />} path="/">
          <Route element={<PrivateRoute />} path="/" />
        </Route>
        <Route element={<Products />} path="/produtos">
          <Route element={<PrivateRoute />} path="/produtos" />
        </Route>
        <Route element={<Cart />} path="/carrinho">
          <Route element={<PrivateRoute />} path="/carrinho" />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
