import React from "react"
import { useHistory } from "react-router"
import { Row, Col, Button } from "reactstrap"
import { logout, ModalNameAction } from "../redux/actions"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getUserName } from "../utils/data.functions"

const SwitchName: React.FC = () => {
  useAppSelector((state) => state.modal)
  
  switch (getUserName()) {
    case '':
      return <>Введите ваше ФИО</>
    default:
      return <>{getUserName()}</>
  }
}

export const NavBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  
  const modalTrigger = () => {
    dispatch(ModalNameAction())
  }

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/mtt/login')
  }

  return (
    <Row className="bg-light">
      <Col className="d-flex justify-content-end p-2">
        <div
          className="text-uppercase text-secondary fs-4 font-weight-normal me-3"
          onClick={() => modalTrigger()}
        ><SwitchName /></div>
        <Button
          className="me-3"
          outline
          size="xs"
          onClick={() => logoutHandler()}
        >Выйти</Button>
      </Col>
    </Row>
  )
}