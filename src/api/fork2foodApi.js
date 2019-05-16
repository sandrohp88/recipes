import { handleResponse, handleError } from './apiUtils'
const searchUrl = process.env.REACT_APP_API_URL_SEARCH
const getUrl = process.env.REACT_APP_API_URL_GET
const apiKey = process.env.REACT_APP_API_KEY
const getRecipes = async query => {
  try {
    let response
    if (process.env.NODE_ENV === 'development') {
      response = await fetch(`${searchUrl}${query}`)
    } else {
      response = await fetch(`${searchUrl}${apiKey}&q=${query}`)
    }
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}
const getRecipeDetails = async id => {
  try {
    let response
    if (process.env.NODE_ENV === 'development') {
      response = await fetch(`${getUrl}${id}`)
    } else {
      response = await fetch(`${getUrl}${apiKey}&rId=${id}`)
    }
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}

export { getRecipes, getRecipeDetails }
