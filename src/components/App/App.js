import React, { useState } from 'react'
import Header from '../Header/Header'
import { RecipeList } from '../RecipeList/RecipeList'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import ShoppingList from '../ShoppingList/ShoppingList'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const styles = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100vw',
    overflow: 'auto'
  }
}))

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [shoppingList, setShoppingList] = useState([])
  const [recipeDetails, setRecipeDetails] = useState({})
  const classes = styles()
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Header setRecipes={setRecipes} />
      </Grid>
      <Grid item xs={2} md={2}>
        {recipes.length > 0 && (
          <Paper className={classes.paper}>
            <RecipeList recipes={recipes} setRecipeDetails={setRecipeDetails} />
          </Paper>
        )}
      </Grid>
      <Grid item md={8} xs={10}>
        {/* Render only if there is recipeDetails selected */}
        {Object.entries(recipeDetails).length > 0 &&
          recipeDetails.constructor === Object && (
            <Paper className={classes.paper}>
              <RecipeDetails
                recipeDetails={recipeDetails}
                setShoppingList={setShoppingList}
                shoppingList={shoppingList}
              />
            </Paper>
          )}
      </Grid>
      <Grid item md={2} xs={10}>
        {shoppingList.length > 0 && (
          <Paper className={classes.paper}>
            <ShoppingList
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
            />
          </Paper>
        )}
      </Grid>
    </Grid>
  )
}

export default App
