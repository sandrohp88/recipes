import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme => ({
  image: {
    height: '100',
    width: '100%',
    // transform: 'scale(1.04) translateY(-1px)',
    transformOrigin: 'top',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  title: {
    position:'relative',
    bottom: '3.4rem',
    padding: theme.spacing(1.5),
    fontWeight: '500',
    left: '50%',
    transform: 'translate(-50%, 20%) skewY(-6deg)',
    color: '#fff',
    textTransform: 'uppercase',
    width: '70%',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
   
  }
}))

const RecipeMedia = ({ imageUrl, title }) => {
  const classes = useStyles()
  return (
    <>
      <img src={imageUrl} alt={title} className={classes.image} />
      <Typography className={classes.title}>{title}</Typography>
    </>
  )
}

RecipeMedia.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
export default RecipeMedia
