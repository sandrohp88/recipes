import React, { useState, useEffect } from 'react'
import { getRecipes } from '../../api/fork2foodApi'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '33%',
    backgroundColor: theme.palette.background.paper
  },
  progress: {
    margin: theme.spacing(2)
  }
}))

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      const response = await getRecipes()
      setRecipes(response.recipes)
      setLoading(false)
    }
    fetchRecipes()
  }, [])

  const classes = useStyles()
  return loading ? (
    <CircularProgress className={classes.progress} color="secondary" />
  ) : (
    <List dense className={classes.root}>
      {recipes.map(recipe => (
        <ListItem key={recipe.recipe_id} button>
          <ListItemAvatar>
            <Avatar alt={recipe.title} src={recipe.image_url} />
          </ListItemAvatar>
          <ListItemText
            primary={recipe.title
              .split(' ')
              .splice(0, 2)
              .join(' ')}
            secondary={recipe.publisher}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default RecipeList
