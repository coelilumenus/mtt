import React from "react"
import { useHistory } from "react-router"
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { auth } from "../redux/actions"
import { useAppDispatch } from "../redux/hooks"

export const Login: React.FC = () => {
  const [login, setInputLogin] = React.useState('')
  const [password, setInputPass] = React.useState('')
  const [isValidPass, setValidPass] = React.useState(false)
  const [isInvalidPass, setInvalidPass] = React.useState(false)
  const [isValidLogin, setValidLogin] = React.useState(false)
  const [isInvalidLogin, setInvalidLogin] = React.useState(false)
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleAuth = () => {
    if (login.trim().length > 0 && password.trim().length > 0) {
      dispatch(auth({ login: login.trim(), password: password.trim() }))
      history.push('/mtt/profile')
    } else {
      if (login.trim().length > 0) {
        setValidLogin(true)
      } else {
        setInvalidLogin(true)
      }
      
      if (password.trim().length > 0) {
        setValidPass(true)
      } else {
        setInvalidPass(true)
      }
    }
  }

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    
    setInvalidLogin(false)
    
    if (value.trim().length > 0) {
      setValidLogin(true)
    } else {
      setValidLogin(false)
    }
    
    setInputLogin(value)
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    
    setInvalidPass(false)
    
    if (value.trim().length > 0) {
      setValidPass(true)
    } else {
      setValidPass(false)
    }
    
    setInputPass(value)
  }

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Form className="w-50">
        <FormGroup>
          <Label for="login">Логин</Label>
          <Input
            type="text"
            name="login"
            id="login"
            valid={isValidLogin}
            invalid={isInvalidLogin}
            value={login}
            onChange={(e) => handleLogin(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Пароль</Label>
          <Input
            type="password"
            name="password"
            id="password"
            valid={isValidPass}
            invalid={isInvalidPass}
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </FormGroup>
        <Button
          className="mt-3"
          onClick={handleAuth}
        >Войти</Button>
      </Form>
    </Container>
  )
}