import React from "react"
import { UserClass } from "../../utils/interfaces"
import { ChangeNameModal } from "./ChangeName.modal"

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
}

export const NavBar: React.FC<Props> = ({ setIsAuth, setModal, user }) => {
  const handleName = () => {
    setModal(() => <ChangeNameModal setModal={setModal} user={user} />)
  }

  const handleLogout = () => {
    setIsAuth(false)
  }

  const name = user.getFullName() === undefined ? 'Введите ваше ФИО' : user.getFullName()

  return <div className="container-fluid">
    <div className="row">
      <nav className="navbar navbar-light bg-light d-flex ">
        <div className="col d-flex justify-content-end pr-10">
          <div
            className="lead pr-10"
            onClick={() => handleName()}
          > {name} </div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => handleLogout()}
          >Выйти</button>
        </div>
      </nav>
    </div>
  </div>
}