const express = require('express')
const app = express()
const digitalSign= require('digital-signing');

const port = 3000

app.get('/sign', (req, res) => {
  const {pk, file} = req;
  const sign = digitalSign.signFile(pk, file);
  res.send(sign);
})

app.get('/verify', (req, res) => {
  const {pk, sign, file} = req;
  const sign = digitalSign.verifyFile(pk, sign, file);
  res.send(sign);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})