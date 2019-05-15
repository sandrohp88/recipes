import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button, Grid } from '@material-ui/core'
import { PlayArrow } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0)
  },
  button: {
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
    borderRadius: '10rem',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.07)'
    },
    padding: theme.spacing(1, 2),
    margin: theme.spacing(2, 0, 0, 0)
  },
  arrow: {
    fontSize: '13px',
    padding: theme.spacing(0, 1)
  },
  title: {
    fontWeight: 600,
    color: '#F59A83',
    textTransform: 'uppercase',
    textAlign: 'center',
    transform: 'skewY(-3deg)',
    margin: theme.spacing(2, 2)
  }
}))

const RecipeFooter = ({ publisher, sourceUrl }) => {
  const classes = styles()

  return (
    <Grid
      className={classes.grid}
      container
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography className={classes.title}>How to cook it</Typography>
      </Grid>
      <Grid item>
        <Typography display="inline">
          This recipe was carefully designed and tested by{' '}
        </Typography>
        <Typography display="inline" variant="subtitle2">
          {publisher}.
        </Typography>
        <Typography align="center">
          Please check out directions at their website
        </Typography>
      </Grid>
      <Grid item>
        <Button className={classes.button}>
          <Typography variant="caption">Directions</Typography>
          <PlayArrow className={classes.arrow} />
        </Button>
      </Grid>
    </Grid>
  )
}

RecipeFooter.propTypes = {
  publisher: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired
}

export default RecipeFooter
