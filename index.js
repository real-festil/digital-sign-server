const express = require('express')
const app = express()
const digitalSign= require('digital-signing');

const port = process.env.PORT || 3000

app.get('/sign', (req, res) => {
  const {pk, file} = req;
  const ds = digitalSign.signFile(pk, file);
  res.send(ds);
})

app.get('/verify', (req, res) => {
  const {pk, sign, file} = req;
  const ds = digitalSign.verifyFile(pk, sign, file);
  res.send(ds);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})