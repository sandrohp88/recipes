import React, { useState } from 'react'

import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Fab from '@material-ui/core/Fab'
import { fade } from '@material-ui/core/styles/colorManipulator'
import logo from '../../img/logo.png'
import { getRecipes } from '../../api/fork2foodApi'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F9F5F3'
  },
  logo: {
    height: '2.5rem',
    display: 'block'
  },
  appBar: {},
  toolbar: {
    display: 'flex',
    backgroundColor: '#F9F5F3',
    justifyContent: 'space-between'
  },
  search: {
    position: 'relative',
    borderRadius: '10rem',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.5)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  fab: {
    backgroundImage: 'linear-gradient(to right bottom, #FBDB89, #F48982)',
    borderRadius: '10rem',
    border: 'none',
    textTransform: 'uppercase',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all .2s'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 3),
    transition: theme.transitions.create('width'),
    width: '100%',
    minWidth: 250,
    [theme.breakpoints.up('md')]: {
      width: 50
    }
  },
  inputRoot: {
    color: 'inherit'
  }
}))

function Header({ setRecipes }) {
  const [query, setQuery] = useState('pizza')

  const classes = useStyles()
  // Events handlers
  const handleSearchChange = event => {
    setQuery(event.target.value)
  }
  const handleMakeSearch = async () => {
    const recipes = await getRecipes(query)
    setRecipes(recipes)
  }
  return (
    <Paper className={classes.root}>
      <AppBar
        position="static"
        color="default"
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="Logo" className={classes.logo} />
          <div className={classes.search}>
            <InputBase
              placeholder="Search over 1,000,000 recipes…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={handleSearchChange}
              value={query}
            />
            <Fab
              variant="extended"
              className={classes.fab}
              onClick={handleMakeSearch}
            >
              <SearchIcon />
              Search
            </Fab>
          </div>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}
export default Header
