const express = require ('express')
const mongoose = require('mongoose')
const bodyParser = require('cors')
const cors = require('cors')

const meals = require('./routes/meals')

const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/meals', meals)

/*
app.get('*', (req, res) => {
  res.send('chanchito feliz')
})
*/

module.exports = app
