import React from "react"
import { Redirect, Route, RouteProps } from "react-router"
import { store } from "../redux/store"



export const ProtectedRoute: React.FC<RouteProps> = ({ ...routeProps }) => {
  const isAuth = store.getState().auth.isAuth
  
  if (isAuth) {
    return <Route {...routeProps} />
  }

  return <Redirect to="/mtt/login" />
}