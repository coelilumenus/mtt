import React from "react"
import { UserClass } from "../../utils/interfaces"
import { UserItem } from "./UserItem"

interface Props {
  setModal: React.Dispatch<React.SetStateAction<React.ReactElement>>
  user: UserClass
}

export const UserList: React.FC<Props> = ({ setModal, user }) => {
  const [page, setPage] = React.useState(1)

  const elements = user.getUsers()
  const elOnPage = 5
  const lastPage = Math.ceil(elements.length / elOnPage) || 1
  const elOnLastPage = (elements.length % elOnPage) === 0 ? 5 : (elements.length % elOnPage)

  const isLastPage = (page === lastPage) ? true : false
  const isFirstPage = (page === 1) ? true : false

  const renderItems = () => {
    const elementsList = []
    let firstElement: number
    let lastElement: number

    switch (page) {
      case 1:
        firstElement = 0
        lastElement = (elements.length < 5) ? elements.length : elOnPage
        break;
      case lastPage:
        firstElement = ((page - 1) * elOnPage)
        lastElement = firstElement + elOnLastPage
        break;
      default:
        firstElement = ((page - 1) * elOnPage)
        lastElement = (page * elOnPage)
        break;
    }

    for (let i = firstElement; i < lastElement; i++) {
      elementsList.push(<UserItem page={page} setPage={setPage} user={user} setModal={setModal} name={elements[i].name} city={elements[i].city} id={i} key={i} />)
    }

    return elementsList
  }

  if (elements.length !== 0) {
    return <>
      <div className="row mt-3 pl-12">
        <ul className="list-group d-flex justify-content-between flex-row">
          <li key='fio' className="list-group-item min-width-24 border-none flex-grow-1">ФИО</li>
          <li key='city' className="list-group-item min-width-24 border-none flex-grow-1 pl-24">Город</li>
          <li key='empty' className="list-group-item min-width-24 border-none"><div className="div min-width-49"></div></li>
        </ul>
        {renderItems()}
      </div>
      <div className="row mt-3">
        <div className="col-1">
          <button
            disabled={isFirstPage}
            type="button"
            className={`btn btn-light btn-outline-secondary min-width-90`}
            onClick={() => setPage(page - 1)}
          >Назад</button>
        </div>
        <div className="col-1">
          <button
            disabled={isLastPage}
            type="button"
            className={`btn btn-light btn-outline-secondary min-width-90`}
            onClick={() => setPage(page + 1)}
          >Вперёд</button>
        </div>
      </div>
    </>
  } else {
    return <div className="row mt-3 pl-12">Список пользователей пуст</div>
  }

}