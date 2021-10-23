import React from "react"
import { UserClass } from "../../utils/interfaces"

interface Props {
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
  id: number
}

export const EditUserModal: React.FC<Props> = ({ setModal, user, id }) => {
  const userData = user.getUsers()[id]
  const [name, setName] = React.useState(userData.name)
  const [city, setCity] = React.useState(userData.city)
  

  const handleInputName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleInputCity = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  const handleChangeUser = () => {
    const newArr = user.getUserData().filter((item, index) => index !== (id + 1));
    newArr.push(`user:${name}_${city}`)
    user.setUserData(newArr.join(','))
    setModal(<></>)
  }

  return <>
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Редактировать пользователя:</h5>
            <button type="button"
              className="btn-close"
              onClick={() => setModal(<></>)}
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="full-name" className="col-form-label">ФИО:</label>
            <input
              type="text"
              className="form-control"
              id="full-name"
              value={name}
              onChange={(e) => handleInputName(e)}
            />
            <label htmlFor="city" className="col-form-label">Город:</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => handleInputCity(e)}
            />
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
              onClick={() => handleChangeUser()}
            >Изменить</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop"></div>
  </>
}