import React from 'react'
import PropTypes from 'prop-types'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { Person, Timer, Add, Remove, FavoriteBorder } from '@material-ui/icons'
import makeStyles from '@material-ui/styles/makeStyles'

const styles = makeStyles(theme => ({
  
  fillColor: {
    color: '#F59A83'
  },
  person: {
    padding: `0 ${theme.spacing(1)}px`
  },
  timer: {
    padding: `0 ${theme.spacing(1)}px`
  },
  add: {
    color: 'white',
    fontSize: '.7rem'
  },
  remove: {
    color: 'white',
    fontSize: '.7rem'
  },
  favorite: {
    color: 'white',
    '&:hover': {
      transform: 'scale(1.07)'
    }
  },
  iconButton: {
    '&:hover': {
      transform: 'scale(1.07)'
    },
    margin: '4px'
  },
  gradientBg: {
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)'
  },
  infoIcon: {
    display: 'flex'
  }
}))

const RecipeInfo = ({ minutes, servings }) => {
  const classes = styles()
  return (
    <Grid container spacing={4} justify="center" alignItems="center">
      <Grid item>
        <div className={classes.infoIcon}>
          <Timer className={`${classes.timer} ${classes.fillColor}`} />
          <Typography display="inline" gutterBottom>
            {`${minutes} MINUTES`}{' '}
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <div className={classes.infoIcon}>
          <Person className={`${classes.person} ${classes.fillColor}`} />
          <Typography display="inline">{`${servings} SERVINGS`}</Typography>
          <IconButton
            className={`${classes.gradientBg} ${classes.iconButton}`}
            size="small"
          >
            <Add className={classes.add} />
          </IconButton>
          <IconButton
            className={`${classes.gradientBg} ${classes.iconButton}`}
            size="small"
          >
            <Remove className={classes.remove} />
          </IconButton>
        </div>
      </Grid>
      <Grid item>
        <IconButton
          className={`${classes.gradientBg} ${classes.iconButton}`}
          size="medium"
        >
          <FavoriteBorder className={classes.favorite} />
        </IconButton>
      </Grid>
    </Grid>
  )
}

RecipeInfo.propTypes = {
  minutes: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired
}
export default RecipeInfo
