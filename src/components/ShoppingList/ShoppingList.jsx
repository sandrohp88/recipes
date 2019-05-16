import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  delete: { color: '#F59A83' },
  text: { color: '#655A56' },
  title: {
    fontWeight: 600,
    color: '#F59A83',
    textTransform: 'uppercase',
    textAlign: 'center',
    transform: 'skewY(-3deg)',
    paddingTop: theme.spacing(1),
    margin: theme.spacing(2, 2)
  }
}))

function ShoppingList({ shoppingList, setShoppingList }) {
  const classes = useStyles()
  const handleRemove = ingredient => {
    const newShoppingList = shoppingList.filter(item => ingredient !== item)
    setShoppingList(newShoppingList)
  }
  return (
    <div>
      <Typography className={classes.title}>My Shopping List</Typography>
      <List>
        {shoppingList.map((ingredient, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={ingredient} className={classes.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="Delete"
                onClick={() => handleRemove(ingredient)}
              >
                <DeleteIcon className={classes.delete} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
  setShoppingList: PropTypes.func.isRequired
}
export default ShoppingList
