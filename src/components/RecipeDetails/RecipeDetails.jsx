import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    width: '100%',
    backgroundColor: '#F9F5F3'
  },
  media: {
    height: '20rem',
    transform: 'scale(1.04) translateY(-1px)',
    transformOrigin: 'top',
    objectFit: 'cover',
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)'
  },
  title: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 20%) skewY(-6deg)',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.75rem',
    textTransform: 'uppercase',
    width: '70%',
    lineHeight: 2,
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)'
  }
}

const RecipeDetails = ({ classes, recipeDetails }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={recipeDetails.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.title}
          >
            {recipeDetails.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

RecipeDetails.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecipeDetails)
