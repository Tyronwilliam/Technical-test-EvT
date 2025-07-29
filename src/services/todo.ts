const url = 'https://jsonplaceholder.typicode.com/todos'

export const getTodo = async () => {
  try {
    const response = await fetch(`${url}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const status = response.status
    return { data, status }
  } catch (error: any) {
    console.error(`Server error: ${error.message}`)
    throw new Error(`Server error: ${error.message}`)
  }
}
