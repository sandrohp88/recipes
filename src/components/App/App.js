import React, { useState } from 'react'
import Header from '../Header/Header'
import { RecipeList } from '../RecipeList/RecipeList'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import Grid from '@material-ui/core/Grid'
const App = () => {
  const [recipes, setRecipes] = useState([])
  const [recipeDetails, setRecipeDetails] = useState({})
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Header setRecipes={setRecipes} />
      </Grid>
      <Grid item xs={3}>
        <RecipeList recipes={recipes} setRecipeDetails={setRecipeDetails} />
      </Grid>
      <Grid item xs={6}>
        <RecipeDetails recipeDetails={recipeDetails} />
      </Grid>
    </Grid>
  )
}

export default App
