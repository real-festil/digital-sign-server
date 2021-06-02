const express = require('express')
const app = express()
const digitalSign= require('digital-signing');

const port = process.env.PORT || 3000

app.post('/sign', (req, res) => {
  try {
    const {pk} = req;
    console.log(req);
    console.log(req.files)
    const file = req.files.file;
    const ds = digitalSign.signFile(pk, file);
    console.log(`ds`, ds)
    res.send(JSON.stringify(ds));
  } catch (err) {
    res.send(err.toString());
  }
})

app.post('/verify', (req, res) => {
  const {pk, sign, file} = req;
  const ds = digitalSign.verifyFile(pk, sign, file);
  res.send(ds || 'error');
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})