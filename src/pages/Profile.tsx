import React from "react"
import { Container } from "reactstrap"
import { AddItem } from "../components/AddItem"
import { EmptyList } from "../components/EmptyList"
import { ItemList } from "../components/ItemList"
import { ModalAdd, ModalName, ModalEdit, ModalDelete } from "../components/modals"
import { NavBar } from "../components/NavBar"
import { Pagination } from "../components/Pagination"
import { setMax, updateLength } from "../redux/actions"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { $ModalAdd, $ModalDelete, $ModalEdit, $ModalName } from "../utils/constants"

const SwitchEmptyStatus: React.FC = () => {
  const dispatch = useAppDispatch()

  const selectLength = useAppSelector((state) => state.currentData.length)
  dispatch(setMax(selectLength))

  switch (selectLength) {
    case 0:
      return <EmptyList />
    default:
      return <><ItemList /><Pagination /></>
  }
}

const SwitchModalStatus: React.FC = () => {
  const selectModal = useAppSelector((state) => state.modal)

  switch (selectModal.component) {
    case $ModalAdd:
      return <ModalAdd />
    case $ModalName:
      return <ModalName />
    case $ModalEdit:
      return <ModalEdit />
    case $ModalDelete:
      return <ModalDelete />
    default:
      return <></>
  }
}

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch()
  dispatch(updateLength())

  return (
    <Container fluid>
      <SwitchModalStatus />
      <NavBar />
      <Container>
        <AddItem />
        <SwitchEmptyStatus />
      </Container>
    </Container>
  )
}