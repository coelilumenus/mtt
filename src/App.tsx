import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { UserPage } from './pages/UserPage'
import { ProtectedRoute } from './utils/ProtectedRoute';
import { User } from './utils/User';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const user = new User()

  return <Router>
    <Switch>
      <Route path="/login" component={() => <LoginPage setIsAuth={setIsAuth} user={user} />} />
      <ProtectedRoute isAuth={isAuth} path="/users" component={() => <UserPage setIsAuth={setIsAuth} user={user} />}  />
      <ProtectedRoute isAuth={isAuth} path="/" component={() => <UserPage setIsAuth={setIsAuth} user={user} />} exact />
    </Switch>
  </Router>
}

export default App;
