import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import RecipeInfo from './RecipeInfo'
import RecipeMedia from './RecipeMedia'
import RecipeIngredients from './RecipeIngredients'
import RecipeFooter from './RecipeFooter'
const styles = makeStyles(theme => ({
  grid: {
    width: '100%',
    backgroundColor: '#F9F5F3',
    color: '#655A56'
  }
}))
const RecipeDetails = ({ recipeDetails, setShoppingList, shoppingList }) => {
  // Assuming we need 15 minutes for each 3 ingredients
  const calculateTime = () => {
    const numIngredients = recipeDetails.ingredients.length
    const periods = Math.ceil(numIngredients / 3)
    return periods * 15
  }
  const classes = styles()
  const servings = 4
  return (
    <Grid
      className={classes.grid}
      container
      // spacing={2}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <RecipeMedia
          imageUrl={recipeDetails.image_url}
          title={recipeDetails.title}
        />
      </Grid>
      <Grid item>
        <RecipeInfo servings={servings} minutes={calculateTime()} />
      </Grid>
      <Grid item />
      <Grid item>
        <RecipeIngredients
          ingredients={recipeDetails.ingredients}
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
      </Grid>
      <Grid item>
        <RecipeFooter
          publisher={recipeDetails.publisher}
          sourceUrl={recipeDetails.source_url}
        />
      </Grid>
    </Grid>
  )
}

RecipeDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    publisher: PropTypes.string.isRequired,
    f2f_url: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    source_url: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    social_rank: PropTypes.number.isRequired,
    publisher_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  setShoppingList: PropTypes.func.isRequired,
  shoppingList: PropTypes.array.isRequired
}

export default RecipeDetails
