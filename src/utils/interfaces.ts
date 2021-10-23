export type UserData = {
  city?: string
  name?: string
}

export interface UserClass {
  auth(login: string, password: string): string 
  setFullName(value: string): void
  getFullName(): void
  setNewUser(name: string, city: string): void
  getUsers(): UserData[]
  getUserData(): string[]
  setUserData(value: string): void
}
