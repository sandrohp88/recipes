import { handleResponse, handleError } from './apiUtils'
const url = 'http://localhost:3001/recipes'
const getRecipes = async () => {
  try {
    const response = await fetch(url)
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}

export { getRecipes }
