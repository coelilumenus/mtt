import React from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { modalDestroy, updateLength, setMax } from "../../redux/actions"
import { useAppDispatch } from "../../redux/hooks"
import { store } from "../../redux/store"
import { getUserData, genId, fetchData, setData } from "../../utils/data.functions"

export const ModalAdd: React.FC = () => {
  const [name, setName] = React.useState('')
  const [city, setCity] = React.useState('')
  const dispatch = useAppDispatch()

  const nameInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const cityInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
  }

  const discardHandler = () => {
    dispatch(modalDestroy())
  }

  const addHandler = () => {
    const userData = getUserData()
    const curId = store.getState().auth.id
    const id = genId()
    userData.push({ name, city, id })


    const data = fetchData()
    data[curId].data = userData
    setData(data)
    dispatch(updateLength())
    dispatch(setMax(store.getState().currentData.length))
    dispatch(modalDestroy())
  }

  return (
    <Modal
      isOpen={true}
      centered
      fullscreen="md"
    >
      <ModalHeader>
        Добавление пользователя
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="fullname">ФИО:</Label>
            <Input
              value={name}
              onChange={(e) => nameInputHandler(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Город:</Label>
            <Input
              value={city}
              onChange={(e) => cityInputHandler(e)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => discardHandler()}
        >Отмена</Button>
        <Button
          color="primary"
          onClick={() => addHandler()}
        >Добавить</Button>
      </ModalFooter>
    </Modal>
  )
}