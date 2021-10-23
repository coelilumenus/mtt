import React, { useState } from "react"
import { useHistory } from "react-router"
import { invalid, invalidLogin, invalidPassword } from "../utils/consts";
import { UserClass } from "../utils/interfaces";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  user: UserClass
}

export const LoginPage: React.FC<Props> = ({ setIsAuth, user }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()

  const handleLogin = () => {
    const validation = user.auth(login, password)

    switch (validation) {
      case invalid:
        console.log('Password invalid')
        break;
      case invalidLogin:
        console.log('Login should contains minimum 4 character')
        break;
      case invalidPassword:
        console.log('Password should contains minimum 4 character')
        break;
      default:
        setIsAuth(true)
        history.push("/users")
        break;
    }
  }

  const handleChangeLogin = (e: React.FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  }

  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  return (
    <div className="container auth">
      <form>
        <div className="mb-3">
          <label htmlFor="inputLogin" className="form-label">Логин</label>
          <input
            type="text"
            className="form-control"
            id="inputLogin"
            aria-describedby="loginHelp"
            value={login}
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleLogin()}
        >Войти</button>
      </form>
    </div>
  )
}