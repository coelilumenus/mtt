import React from "react"
import { UserClass, UserData } from "../../utils/interfaces"
import { EditUser } from "./EditUser"

interface Props extends UserData {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
  id: number
}

export const UserItem: React.FC<Props> = ({ page, setPage, name, city, id, setModal, user }) => {

  return <ul key={id} className="list-group list-group-flush d-flex flex-row">
    <li className="list-group-item min-width-24 width-592 flex-grow-1">{name}</li>
    <li className="list-group-item min-width-24 width-592 flex-grow-1">{city}</li>
    <li className="list-group-item min-width-24"><EditUser page={page} setPage={setPage} user={user} setModal={setModal} id={id} /></li>
  </ul>
}