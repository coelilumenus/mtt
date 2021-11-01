import React from "react"
import { Row, Col, Button } from "reactstrap"
import { ModalAddAction } from "../redux/actions"
import { useAppDispatch } from "../redux/hooks"

export const AddItem: React.FC = () => {
  const dispatch = useAppDispatch()
  
  const modalTrigger = () => {
    dispatch(ModalAddAction())
  }
  
  return (
    <Row>
      <Col className="mt-4">
        <Button
          outline
          size="xs"
          onClick={() => modalTrigger()}
        >Добавить пользователя</Button>
      </Col>
    </Row>
  )
}