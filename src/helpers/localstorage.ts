export const addToLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

export const getFromLocalStorage = (key: string, isJson: boolean = false) => {
  if (typeof window !== "undefined") {
    return isJson ? JSON.parse(localStorage.getItem(key) as string || '{}') : localStorage.getItem(key);
  }
}