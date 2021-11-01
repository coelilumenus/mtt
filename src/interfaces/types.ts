export type User = {
  auth?: Auth
  name?: string
  data?: Item[]
}

export type Auth = {
  login: string
  password: string
}

export type Item = {
  name: string
  city: string
  id: string
}