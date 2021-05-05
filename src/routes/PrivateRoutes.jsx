
import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = (props) => {
  const location = useLocation()
  const { token } = useSelector((state) => state.auth)

  return (
    <>
      {token ? (
        <Route path={props.path} component={props.component} exact />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </>
  )
}
