/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const mockData = require('./mockData')

const { recipes, recipe_sources } = mockData
const data = JSON.stringify({ recipes, recipe_sources })
const filepath = path.join(__dirname, 'db.json')

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log('Mock DB created.')
})
