const express = require('express')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const app = express()
const cors = require('cors')


const homeworks = require('./routes/homeworks.routes')
const authRoutes = require('./routes/auth.routes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/homeworks', homeworks)
app.use('/auth', authRoutes)

module.exports = app