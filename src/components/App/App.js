import React, { useState } from 'react'
import Header from '../Header/Header'
import { getRecipes } from '../../api/fork2foodApi'
import { Button } from '@material-ui/core'
function App() {
  const [recipes, setRecipes] = useState([])
  const loadRecipe = async () => {
    console.log('load clicked')
    const response = await getRecipes()
    console.log(response.recipes)

    setRecipes(response.recipes)
  }

  return (
    <div className="App">
      <Header />
      <h2>Recipes App</h2>
      <Button variant="contained" color="primary" onClick={loadRecipe}>
        Load recipes
      </Button>
      <div>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.recipe_id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
