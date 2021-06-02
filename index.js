const express = require('express')
const app = express()
const digitalSign= require('digital-signing');

const port = process.env.PORT || 3000

app.post('/sign', (req, res) => {
  // try {
  //   const {pk, file} = req;
  //   const ds = digitalSign.signFile(pk, file);
    res.send('hello world');
  // } catch (err) {
  //   res.send(err.toString());
  // }
})

// app.post('/verify', (req, res) => {
//   const {pk, sign, file} = req;
//   const ds = digitalSign.verifyFile(pk, sign, file);
//   res.send(ds || 'error');
// })

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})