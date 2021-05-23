const express = require('express')

const app = express()
const port = 3000

const child_process = require('child_process');

function runCmd(cmd)
{
  const resp = child_process.execSync(cmd);
  const result = resp.toString('UTF8');
  return result;
}

const cmd = `curl ${process.env.REQUEST_ADDRESS}`;  

app.get('/', (req, res) => {
  res.send(`Hello From App 1 v${process.env.VERSION}`)
})

app.get('/service', (req, res) => {
  const result = runCmd(cmd);
  res.send(`curl ${process.env.REQUEST_ADDRESS}: ${result}`)
})

app.listen(port, () => {
  console.log(process.env.REQUEST_ADDRESS)
  console.log(`App 1 listening at ${port}`)
})