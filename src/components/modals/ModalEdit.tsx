import React from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { modalDestroy } from "../../redux/actions"
import { useAppDispatch } from "../../redux/hooks"
import { store } from "../../redux/store"
import { getUserData, fetchData, setData } from "../../utils/data.functions"

export const ModalEdit: React.FC = () => {
  const id: string = store.getState().modal.id
  const item = getUserData().filter((item) => item.id === id)[0]

  const [name, setName] = React.useState(item.name)
  const [city, setCity] = React.useState(item.city)
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

  const changeHandler = () => {
    const userData = getUserData()
    userData.forEach((item) => {
      if (item.id === id) {
        item.name = name
        item.city = city
      }
    })

    const curId = store.getState().auth.id
    const data = fetchData()
    data[curId].data = userData
    setData(data)
    dispatch(modalDestroy())
  }

  return (
    <Modal
      isOpen={true}
      centered
      fullscreen="md"
    >
      <ModalHeader>
        Редактирование пользователя
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
          onClick={() => changeHandler()}
        >Изменить</Button>
      </ModalFooter>
    </Modal>
  )
}