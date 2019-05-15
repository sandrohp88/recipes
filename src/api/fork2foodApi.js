import { handleResponse, handleError } from './apiUtils'
const baseUrl = 'http://localhost:3001/'
const getRecipes = async query => {
  try {
    const response = await fetch(`${baseUrl}recipes?title_like=${query}`)
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}
const getRecipeDetails = async id => {
  try {
    const response = await fetch(
      `${baseUrl}recipe_sources?recipe.recipe_id=${id}`
    )
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
}

export { getRecipes, getRecipeDetails }
