import React, { useState } from 'react'
import Header from '../Header/Header'
import { RecipeList } from '../RecipeList/RecipeList'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const styles = makeStyles(theme => ({
  paper: {
    width: '100%',
  }
}))

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [recipeDetails, setRecipeDetails] = useState({})
  const classes = styles()
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Header setRecipes={setRecipes} />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <RecipeList recipes={recipes} setRecipeDetails={setRecipeDetails} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {/* Render only if there is recipeDetails selected */}
        {Object.entries(recipeDetails).length > 0 &&
          recipeDetails.constructor === Object && (
            <Paper className={classes.paper}>
              <RecipeDetails recipeDetails={recipeDetails} />
            </Paper>
          )}
      </Grid>
    </Grid>
  )
}

export default App
