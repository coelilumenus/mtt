import React from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { modalDestroy } from "../../redux/actions"
import { useAppDispatch } from "../../redux/hooks"
import { store } from "../../redux/store"
import { getUserName, fetchData, setData } from "../../utils/data.functions"

export const ModalName: React.FC = () => {
  const [name, setName] = React.useState(getUserName())
  const [isValid, setValid] = React.useState(false)
  const [isInvalid, setInvalid] = React.useState(false)
  const dispatch = useAppDispatch()

  const nameInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setInvalid(false)
    
    if (value.trim().length > 0) {
      setValid(true)
    } 
    
    setName(value)
  }

  const discardHandler = () => {
    dispatch(modalDestroy())
  }

  const setNameHandler = () => {
    if (name.trim().length > 0) {
      const curId = store.getState().auth.id
      const data = fetchData()
      data[curId].name = name.trim()
      setData(data)
      dispatch(modalDestroy())
    } else {
      setInvalid(true)
    }
  }

  return (
    <Modal
      isOpen={true}
      centered
      fullscreen="md"
    >
      <ModalHeader>
        Изменение ФИО
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="fullname">Введите ваше ФИО:</Label>
            <Input
              invalid={isInvalid}
              valid={isValid}
              value={name}
              onChange={(e) => nameInputHandler(e)}
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
          onClick={() => setNameHandler()}
        >Сохранить изменения</Button>
      </ModalFooter>
    </Modal>
  )
}