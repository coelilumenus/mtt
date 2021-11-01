import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { modalDestroy, updateLength, setMax } from "../../redux/actions"
import { useAppDispatch } from "../../redux/hooks"
import { store } from "../../redux/store"
import { getUserData, fetchData, setData } from "../../utils/data.functions"

export const ModalDelete: React.FC = () => {
  const id: string = store.getState().modal.id
  const item = getUserData().filter((item) => item.id === id)[0]
  const dispatch = useAppDispatch()

  const discardHandler = () => {
    dispatch(modalDestroy())
  }

  const deleteHandler = () => {
    const userData = getUserData().filter((item) => item.id !== id)

    const curId = store.getState().auth.id
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
        Вы действительно хотите удалить пользователя?
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="fullname">ФИО:</Label>
            <Input
              disabled={true}
              value={item.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Город:</Label>
            <Input
              disabled={true}
              value={item.city}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="light"
          onClick={() => discardHandler()}
        >Отмена</Button>
        <Button
          color="danger"
          onClick={() => deleteHandler()}
        >Удалить</Button>
      </ModalFooter>
    </Modal>
  )
}