const express = require('express')

const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send(`Simple App version 3, breaking changes`)
})

app.get('/v1', (req, res) => {
  res.send(`version 1 api endpoint`);
})

// Available from v2.0.0 onwards
app.get('/v2', (req, res) => {
  res.send(`version 2 api endpoint`);
})

// Available from v3.0.0 onwards
app.get('/v3', (req, res) => {
  res.send(`version 3 api endpoint`);
})

app.listen(port, () => {
  console.log(`App listening at ${port}`)
})