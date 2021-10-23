import React from "react"
import { UserClass } from "../../utils/interfaces"

interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
  id: number
}

export const DeleteUserModal: React.FC<Props> = ({ page, setPage, setModal, user, id }) => {
  const userData = user.getUsers()[id]

  const handleDeleteUser = () => {
    if (user.getUsers().length % 5 === 1) {
      setPage(page - 1)
    }
    
    const newArr = user.getUserData().filter((item, index) => index !== (id + 1));
    user.setUserData(newArr.join(','))
    setModal(<></>)
  }

  return <>
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Удаление пользователя:</h5>
            <button type="button"
              className="btn-close"
              onClick={() => setModal(<></>)}
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="full-name" className="col-form-label">ФИО:</label>
            <div className="lead">{userData.name}</div>
            <label htmlFor="city" className="col-form-label">Город:</label>
            <div className="lead">{userData.city}</div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setModal(<></>)}
            >Отмена</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDeleteUser()}
            >Удалить</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop"></div>
  </>
}