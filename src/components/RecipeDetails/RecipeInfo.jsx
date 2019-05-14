import React from 'react'
import PropTypes from 'prop-types'
import { Grid, IconButton, Paper, Typography } from '@material-ui/core'
import { Person, Timer, Add, Remove, FavoriteBorder } from '@material-ui/icons'
import withStyles from '@material-ui/styles/withStyles'

const styles = {
  paper: {
    position: 'relative',
    width: '100%',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#F9F5F3'
  },
  fillColor: {
    color: '#F59A83'
  },
  person: {
    // padding: '16px'
  },
  timer: {
    // padding: '16px'
  },
  add: {
    color: 'white',
    fontSize: '13px'
  },
  remove: {
    color: 'white',
    fontSize: '13px'
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
    }
  },
  gradientBg: {
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)'
  }
}

const RecipeInfo = ({ classes, minutes, servings }) => (
  <Paper className={classes.paper} elevation={0}>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6} sm={4}>
        <Timer className={`${classes.timer} ${classes.fillColor}`} />
        <Typography display="inline" gutterBottom>
          {`${minutes} MINUTES`}{' '}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4}>
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
      </Grid>
      <Grid item xs={12} sm={4}>
        <IconButton className={`${classes.gradientBg} ${classes.iconButton}`}>
          <FavoriteBorder className={classes.favorite} />
        </IconButton>
      </Grid>
    </Grid>
  </Paper>
)

RecipeInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  minutes: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired
}
export default withStyles(styles)(RecipeInfo)
