import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography } from '@material-ui/core'
import { CheckCircleOutline, ShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  grid: {
    backgroundColor: '#F2EFEE',
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0)
    // [theme.breakpoints.down('xs')]: {
    //   padding: 0
    // }
  },
  shoppingCart: {
    border: 'none',
    textTransform: 'uppercase',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all .2s',
    fontSize: '16px',
    padding: theme.spacing(0, 1)
  },
  checkBox: {
    color: '#F48982',
    borderRadius: '50%',
    margin: '0 8px'
  },
  div: {
    display: 'flex'
  },
  button: {
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
    borderRadius: '10rem',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.07)'
    },
    padding: theme.spacing(1, 2),
    margin: theme.spacing(2, 0)
  },
  typography: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

const RecipeIngredients = ({ ingredients, shoppingList, setShoppingList }) => {
  const classes = styles()
  const firstHalfIngredients = ingredients.slice(0, ingredients.length / 2)
  const secondHalfIngredients = ingredients.slice(ingredients.length / 2)
  const handleAddToShoppingList = () => {
    const newShoppingList = new Set([...ingredients, ...shoppingList])
    setShoppingList(Array.from(newShoppingList))
  }
  return (
    <Grid
      container
      className={classes.grid}
      justify="center"
      // alignItems="center"
    >
      <Grid item xs={6}>
        {firstHalfIngredients.map((ingredient, index) => {
          return (
            <div key={index} className={classes.div}>
              <CheckCircleOutline className={classes.checkBox} />
              <Typography display="inline">{ingredient}</Typography>
            </div>
          )
        })}
      </Grid>
      <Grid item xs={6}>
        {secondHalfIngredients.map((ingredient, index) => {
          return (
            <div key={index} className={classes.div}>
              <CheckCircleOutline className={classes.checkBox} />
              <Typography display="inline">{ingredient}</Typography>
            </div>
          )
        })}
      </Grid>
      <Grid item xs={6}>
        <Button className={classes.button} onClick={handleAddToShoppingList}>
          <ShoppingCart className={classes.shoppingCart} />
          <Typography className={classes.typography} variant="caption">
            Add to shopping list
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

RecipeIngredients.propTypes = {
  setShoppingList: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  shoppingList: PropTypes.array.isRequired
}

export default RecipeIngredients
