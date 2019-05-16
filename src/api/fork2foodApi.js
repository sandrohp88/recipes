import { handleResponse, handleError } from './apiUtils'
const searchUrl = process.env.REACT_APP_API_URL_SEARCH
const getUrl = process.env.REACT_APP_API_URL_GET
const getRecipes = async query => {
  try {
    const response = await fetch(`${searchUrl}${query}`)
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}
const getRecipeDetails = async id => {
  try {
    const response = await fetch(`${getUrl}${id}`)
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}

export { getRecipes, getRecipeDetails }
