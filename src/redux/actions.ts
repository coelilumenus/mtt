import { Auth } from "../interfaces/types"
import { $auth, $decr, $incr, $logout, $ModalAdd, $ModalDelete, $modalDestroy, $ModalEdit, $ModalName, $setMax, $updateLength } from "../utils/constants"

export const auth = (value: Auth) => ({type: $auth, value})
export const logout = () => ({type: $logout})

export const setMax = (value: number) => ({type: $setMax, value})
export const incr = () => ({type: $incr})
export const decr = () => ({type: $decr})

export const updateLength = () => ({type: $updateLength})

export const modalDestroy = () => ({type: $modalDestroy})
export const ModalAddAction = () => ({type: $ModalAdd})
export const ModalNameAction = () => ({type: $ModalName})
export const ModalEditAction = (value: string) => ({type: $ModalEdit, value})
export const ModalDeleteAction = (value: string) => ({type: $ModalDelete, value})