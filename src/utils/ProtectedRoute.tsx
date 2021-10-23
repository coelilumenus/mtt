import React from "react"
import { Redirect, Route, RouteProps } from "react-router"

interface Props extends RouteProps {
  isAuth: boolean
}

export const ProtectedRoute: React.FC<Props> = ({ isAuth, ...routeProps }) => {
  if (isAuth) {
    return <Route {...routeProps} />
  }

  return <Redirect to="/mtt/login" />
}