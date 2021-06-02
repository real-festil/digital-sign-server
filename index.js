const express = require('express')
const app = express()
const digitalSign= require('digital-signing');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');

const port = process.env.PORT || 3000

app.use(fileupload());
const jsonParser = bodyParser.json()

// app.use(function (req, res, next) {
//   console.log('populated' req.body) // populated!
//   next();
// })

app.post('/sign', jsonParser, (req, res) => {
  try {
    const {pk} = req.body;
    console.log('req', req.body);
    console.log(`pk`, pk)
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