const express = require('express')
const app = express()
const cors = require('cors')

const houses = require('./houses.js')

app.use(cors())

app.get('/houses', houses.list)

app.listen(4000)