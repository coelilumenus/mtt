import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { ProtectedRoute } from "./utils/ProtectedRoute"

export const App: React.FC = () => {
  return <Router>
    <Switch>
      <Route path="/mtt/login" component={() => <Login />} />
      <ProtectedRoute path="/mtt/profile" component={() => <Profile />} />
    </Switch>
  </Router>
}
