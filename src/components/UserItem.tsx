import React from "react"
import { Item } from "../interfaces/types"
import { ModalDeleteAction, ModalEditAction } from "../redux/actions"
import { useAppDispatch } from "../redux/hooks"

export const UserItem: React.FC<Item> = ({ name, city, id }) => {
  const dispatch = useAppDispatch()

  const editTrigger = () => {
    dispatch(ModalEditAction(id))
  }
  
  const deleteTrigger = () => {
    dispatch(ModalDeleteAction(id))
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{city}</td>
      <td className="d-flex justify-content-end">
        <span
          className="material-icons-outlined text-secondary pointer"
          onClick={() => editTrigger()}
        >edit</span>
        <span
          className="material-icons-outlined text-secondary pointer"
          onClick={() => deleteTrigger()}
        >delete</span>
      </td>
    </tr>
  )
}