import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Add from '@material-ui/icons/Add'
import CheckBoxRounded from '@material-ui/icons/CheckBoxRounded'
import Remove from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import Timer from '@material-ui/icons/Timer'
import Person from '@material-ui/icons/Person'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Divider from '@material-ui/core/Divider'
const styles = theme => ({
  card: {
    width: '100%',
    backgroundColor: '#F9F5F3'
  },
  media: {
    height: '100',
    width: '100%',
    transform: 'scale(1.04) translateY(-1px)',
    transformOrigin: 'top',
    objectFit: 'cover'
    // backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)'
  },
  title: {
    position: 'relative',
    bottom: '3.4rem',
    padding: theme.spacing(2),
    fontWeight: '500',
    left: '50%',
    transform: 'translate(-50%, 20%) skewY(-6deg)',
    color: '#fff',
    textTransform: 'uppercase',
    width: '70%',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
    '@media (min-width:600px)': {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sd')]: {
      fontSize: '10px'
    }
  },
  fab: {
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
    color: 'white',
    padding: '8px 8px',
    '&:hover': {
      transform: 'scale(1.07)'
    }
  },

  favorite: {
    color: 'white',
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover': {
      transform: 'scale(1.07)'
    },
    subHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F48982',
      padding: '0 8px'
    },
    shoppingCart: {
      backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
      borderRadius: '10rem',
      border: 'none',
      textTransform: 'uppercase',
      color: '#fff',
      cursor: 'pointer',
      transition: 'all .2s'
    }
  }
})
const RecipeDetails = ({ classes, recipeDetails }) => {
  // Assuming we need 15 minutes for each 3 ingredients
  const calculateTime = () => {
    const numIngredients = recipeDetails.ingredients.length
    const periods = Math.ceil(numIngredients / 3)
    return periods * 15
  }
  const servings = 4
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={recipeDetails.image_url}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className={classes.title}>
                {recipeDetails.title}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Timer />
              <Typography component="span">{`${calculateTime()} MINUTES`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Person />
              <Typography component="span">{`${servings} SERVINGS`}</Typography>
              <IconButton className={`${classes.fab}`}>
                <Add style={{ fontSize: 13 }} />
              </IconButton>
              <IconButton className={`${classes.fab}`}>
                <Remove style={{ fontSize: 13 }} />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton className={classes.fab}>
                <FavoriteBorder className={classes.favorite} />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <List>
                {recipeDetails.ingredients.map((ingredient, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckBoxRounded
                          style={{ borderRadius: '50%', color: '#F48982' }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={ingredient} />
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
            <Grid item>
              <IconButton
                style={{
                  backgroundImage:
                    'linear-gradient(to right bottom, #FBDB89, #F48982)',
                  borderRadius: '10rem',
                  border: 'none',
                  textTransform: 'uppercase',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all .2s',
                  padding: '16px 16pxF'
                }}
              >
                <ShoppingCart fontSize="small" />
                <Typography variant="caption">ADD TO SHOPPING LIST</Typography>
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">How to cook it</Typography>
            </Grid>
            <Grid item>
              <Typography display="inline" variant="body1">
                This recipe was carefully designed and tested by{' '}
                <Typography display="inline" variant="subtitle2">
                  {recipeDetails.publisher}.{' '}
                </Typography>
                Please check out directions at their website.
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                style={{
                  backgroundImage:
                    'linear-gradient(to right bottom, #FBDB89, #F48982)',
                  borderRadius: '10rem',
                  border: 'none',
                  textTransform: 'uppercase',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all .2s',
                  padding: '16px 16pxF'
                }}
              >
                <Typography variant="caption">Directions</Typography>
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions />
    </Card>
  )
}

RecipeDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  recipeDetails: PropTypes.shape({
    publisher: PropTypes.string.isRequired,
    f2f_url: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    source_url: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    social_rank: PropTypes.number.isRequired,
    publisher_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default withStyles(styles)(RecipeDetails)
