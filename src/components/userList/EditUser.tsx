import React from "react"
import { UserClass, UserData } from "../../utils/interfaces"
import { DeleteUserModal } from "./DeleteUser.modal"
import { EditUserModal } from "./EditUser.modal"

interface Props extends UserData {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
  id: number
}

export const EditUser: React.FC<Props> = ({ page, setPage, setModal, user, id }) => {
  const handleEdit = () => {
    setModal(() => <EditUserModal setModal={setModal} user={user} id={id} />)
  }
  
  const handleDelete = () => {
    setModal(() => <DeleteUserModal page={page} setPage={setPage} setModal={setModal} user={user} id={id} />)
  }

  return <>
    <button
      type="button"
      className="btn-clean btn-extra-sm"
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      onClick={() => handleEdit()}
    ><span className="material-icons-outlined">edit</span>
    </button>
    <button
      type="button"
      className="btn-clean btn-extra-sm"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      onClick={() => handleDelete()}
    ><span className="material-icons-outlined">delete</span>
    </button>
  </>
}