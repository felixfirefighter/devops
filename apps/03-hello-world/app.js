// Require express dependency to the app
const express = require('express')

// Create an Express application
const app = express()

// Set the port to be 80
const port = 80

// GET method route 
app.get('/', (req, res) => {
  res.send(`Hello World`)
})

// Listen on port 80
app.listen(port, () => {
  console.log(`App listening at ${port}`)
})