import React from "react"
import { UserClass } from "../../utils/interfaces"

interface Props {
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
}

export const ChangeNameModal: React.FC<Props> = ({ setModal, user }) => {
  const [input, setInput] = React.useState('')

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  const handleSetName = () => {
    user.setFullName(input)
    setModal(<></>)
  }

  return <>
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Изменение ФИО</h5>
            <button type="button"
              className="btn-close"
              onClick={() => setModal(<></>)}
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="full-name" className="col-form-label">Введите ваше ФИО:</label>
            <input
              type="text"
              className="form-control"
              id="full-name"
              value={input}
              onChange={(e) => handleInput(e)}
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
              onClick={() => handleSetName()}
            >Сохранить</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal-backdrop"></div>
  </>
}