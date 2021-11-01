import { Auth, Item, User } from "../interfaces/types"
import { store } from "../redux/store"

export function fetchData(): Array<User> {
  if (localStorage.getItem('data')) {
    return JSON.parse(localStorage.getItem('data')!)
  } else {
    localStorage.setItem('data', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('data')!)
  }
}

export function genId(): string {
  return '_' + Math.random().toString(36).substr(2, 9);
} 

export function getUserData(): Array<Item> {
  const curId = store.getState().auth.id
  const data = fetchData()
  const isData = data[curId]?.hasOwnProperty('data')
  const userData = (isData) ? data[curId]?.data! : []
  
  return userData
}

export function getUserName(): string {
  const curId = store.getState().auth.id
  const data = fetchData()
  const isData = data[curId]?.hasOwnProperty('name')
  const userName = (isData) ? data[curId]?.name! : ''
  
  return userName
}

export function getDataLength(id: number): number {
  const curId = id
  const data = fetchData()
  const isData = data[curId]?.hasOwnProperty('data')
  const length = (isData) ? data[curId]?.data!.length : 0
  
  return length
}

export function authOrCreate(current: Auth) {
  const data = fetchData()

  for (let i = 0; i < data.length; i++) {
    if (data[i].auth) {
      if (data[i].auth!.login === current.login) {
        return (data[i].auth!.password === current.password)
          ? { isAuth: true, id: i }
          : { isAuth: false }
      }
    }
  }

  const newData = data
  newData.push({ auth: current })
  setData(newData)

  return { isAuth: true, id: (newData.length - 1) }
}

export function setData(value: Array<User>) {
  localStorage.setItem('data', JSON.stringify(value))
}