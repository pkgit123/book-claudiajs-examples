// api.js
// claudia.js book listing 2.1

'use strict'

// require the Claudia API Builder module
const Api = require('claudi-api-builder')

// create instance of Claudia API builder
const api = new Api()

// define a route and a handler
// return a simple list of all pizzas
api.get('/pizzas', () => {
  return [
    'Capricciosa',
    'Quattro Formaggi',
    'Napoletana',
    'Margherita'
  ]
})

// export the Claudia API builder instance
module.exports = api
