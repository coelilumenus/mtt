import { Reducer } from "redux"
import { $auth, $decr, $incr, $itemsOnPage, $logout, $ModalAdd, $ModalDelete, $modalDestroy, $ModalEdit, $ModalName, $setMax, $updateLength } from "../utils/constants"
import { authOrCreate, getDataLength } from "../utils/data.functions"

let currentId: number;

export const authReducer: Reducer = (state = { isAuth: false }, action) => {
  const value = action.value

  switch (action.type) {
    case $auth:
      const { login, password } = value
      currentId = authOrCreate({ login, password }).id!
      return state = authOrCreate({ login, password })
    case $logout:
      return state = { isAuth: false }
    default:
      return state
  }
}

export const pageReducer: Reducer = (state = { current: 0, min: 0, max: 0, isMin: true, isMax: false }, action) => {
  const newState = { ...state }

  const updateEdges = () => {
    newState.isMax = (newState.current === newState.max) ? true : false
    newState.isMin = (newState.current === newState.min) ? true : false
  }

  switch (action.type) {
    case $incr:
      if (!newState.isMax) {
        newState.current += 1
      }
      updateEdges()
      return state = newState

    case $decr:
      if (!newState.isMin) {
        newState.current -= 1
      }
      updateEdges()
      return state = newState

    case $setMax:
      
      newState.max = (action.value > 0) ? (Math.floor(action.value / ($itemsOnPage + 1))) : 0
      updateEdges()
      return state = newState

    default:
      return state
  }
}

export const currentDataReducer: Reducer = (state = { length: 0 }, action) => {
  const newState = { ...state }

  switch (action.type) {
    case $updateLength:
      newState.length = getDataLength(currentId)
      return state = newState
    default:
      return state
  }
}

export const modalReducer: Reducer = (state = { isModal: false }, action) => {
  switch (action.type) {
    case $modalDestroy:
      return state = { isModal: false }
    case $ModalAdd:
      return state = { isModal: true, component: $ModalAdd }
    case $ModalName:
      return state = { isModal: true, component: $ModalName }
    case $ModalEdit:
      return state = { isModal: true, component: $ModalEdit, id: action.value }
    case $ModalDelete:
      return state = { isModal: true, component: $ModalDelete, id: action.value }
    default:
      return state
  }
}