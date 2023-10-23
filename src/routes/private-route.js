import PropTypes from 'prop-types'
import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ element, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <Route {...rest} element={element} />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  caseSensitive: PropTypes.bool
}
