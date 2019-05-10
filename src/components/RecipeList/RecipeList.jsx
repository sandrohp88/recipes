import React, { useState, useEffect } from 'react'
import { getRecipes, getRecipeDetails } from '../../api/fork2foodApi'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles(theme => ({
  root: {
    width: '15%',
    backgroundColor: theme.palette.background.paper
  },
  progress: {
    margin: theme.spacing(2),
    height: '5.5rem',
    width: '5.5rem',
    color: '#F59A83',
    transformOrigin: '44% 50%',
    animation: 'rotate 1.5s infinite linear'

  },
  listItemText: {
    fontSize: '1.3rem',
    color: '#F59A83',
    fontWeight: 600,
    marginBottom: '.3rem'
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

  const handleClick = async (recipe_id, event) => {
    const response = await getRecipeDetails(recipe_id)
    console.log(response)
  }

  const classes = useStyles()
  return loading ? (
    <CircularProgress className={classes.progress} svg="" />
  ) : (
    <List dense className={classes.root}>
      {recipes.map(({ recipe_id ,image_url, title, publisher}) => (
        <React.Fragment key={recipe_id}>
          <ListItem button onClick={() => handleClick(recipe_id)}>
            <ListItemAvatar>
              <Avatar alt={title} src={image_url} />
            </ListItemAvatar>
            <ListItemText
              className={classes.listItemText}
              primary={title
                .split(' ')
                .splice(0, 2)
                .join(' ')
                .toUpperCase()}
              secondary={publisher}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}

export default RecipeList
