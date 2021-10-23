import React from "react"
import { UserClass } from "../../utils/interfaces"
import { AddUserModal } from "./AddUser.modal"

interface Props {
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
}

export const AddUser: React.FC<Props> = ({ setModal, user }) => {
  const handleAdd = () => {
    setModal(() => <AddUserModal setModal={setModal} user={user} />)
  }

  return <div className="row mt-5">
    <div className="col-4">
      <button
        type="button"
        className="btn btn-light btn-outline-secondary"
        onClick={() => handleAdd()}
      >Добавить пользователя</button>
    </div>
  </div>
}