const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost:27017/wtp')
.then(() => console.log('Mongoose up'))

const User = require('./models/users')

app.use(bodyParser.json())

/*app.post('/api/login', async (req, res) => {
  const {username, password} = req.body
  const res = await User.findOne({username, password})
  if (!res) {
    console.log('incorrect details')
  } else {
    console.log('logging you in')

  }
})*/
app.post('/api/register', (req, res) => {
  console.log(req.body)
  //const {username, password} = r
})
app.listen(1234, () => console.log('server listening at 1234'))
