export const data = {
  has: (key: string) => {
    return localStorage.getItem(key) ? true : false
  },
  
  set: (key: string, value: string) => {
    return localStorage.setItem(key, value)
  },
  
  get: (key: string, separator: string = ',') => {
    if (data.has(key)) {
      return localStorage.getItem(key)!.split(separator)
    } else {
      return []
    }

  }
}