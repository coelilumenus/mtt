import { invalid, invalidLogin, invalidPassword, newUser, valid } from "./consts"
import { data } from "./data"

export class User {
  login: string

  constructor() {
    this.login = ''
  }
  
  getUserData() {
    return data.get(this.login)
  }
  
  setUserData(value: string) {
    data.set(this.login, value)
  }
  
  getUsers() {
    const users: string[] = []
    const usersData: object[] = []
    
    data.get(this.login)?.forEach((item) => {
      if (item.split(':')[0] === 'user') {
        users.push(item.split(':')[1])
      }
    })
    
    users.forEach((item) => {
      const user = item.split('_')
      usersData.push({name: user[0], city: user[1]})
    })
    
    return usersData
  }
  
  setNewUser(name: string, city: string) {
    const trimName = name.trim()
    const trimCity = city.trim()
    
    if (trimName.length > 1 && trimCity.length > 1) {
      const arr = data.get(this.login) || []
      arr?.push(`user:${trimName}_${trimCity}`)
      const str = arr?.join(',')
      data.set(this.login, str)
    }
  }

  getFullName() {
    let fullName = undefined
    data.get(this.login)?.forEach((item) => {
      if (item.split(':')[0] === 'fullName') {
        fullName = item.split(':')[1]
      }
    })
    return fullName
  }

  setFullName(value: string) {
    const trimmed = value.trim()
    
    if (this.getFullName() === undefined) {
      const arr = data.get(this.login) || []
      arr?.push(`fullName:${trimmed}`)
      const str = arr?.join(',')
      data.set(this.login, str)
    } else if (trimmed.length > 0) {
      const arr = data.get(this.login) || []
      const newArr = arr?.filter((item) => item !== `fullName:${this.getFullName()}`)
      newArr.push(`fullName:${trimmed}`)
      const str = newArr?.join(',')
      data.set(this.login, str)
    } else {
      return
    }
  }

  auth(login: string, password: string): string {
    if (!data.has('users')) {
      data.set('users', 'INITIAL')
    }

    const users = data.get('users')

    for (let i = 0; i < users!.length; i++) {
      const arr = users![i].split(':')
      if (login === arr[0]) {
        if (password === arr[1]) {
          this.login = login
          return valid
        } else {
          return invalid
        }
      }
    }

    if (login.length < 4) {
      return invalidLogin
    } else if (password.length < 4) {
      return invalidPassword
    }

    users?.push(`${login}:${password}`)
    localStorage.setItem('users', users!.join(','))
    localStorage.setItem(`${login}`, '')
    this.login = login
    return newUser
  }
}
