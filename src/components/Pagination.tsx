import React from "react"
import { Row, Col, Button } from "reactstrap"
import { decr, incr } from "../redux/actions"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

export const Pagination: React.FC = () => {
  const isMax = useAppSelector((state) => state.page.isMax)
  const isMin = useAppSelector((state) => state.page.isMin)
  const dispatch = useAppDispatch()

  const prevHandler = () => {
    dispatch(decr())
  }

  const nextHandler = () => {
    dispatch(incr())
  }

  return (
    <Row>
      <Col className="mt-4">
        <Button
          className="me-3"
          outline
          size="xs"
          disabled={isMin}
          onClick={() => prevHandler()}
        >Назад</Button>
        <Button
          outline
          size="xs"
          disabled={isMax}
          onClick={() => nextHandler()}
        >Вперёд</Button>
      </Col>
    </Row>
  )
}