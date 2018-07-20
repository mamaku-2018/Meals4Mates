const path = require('path')
const express = require('express')

const authRoutes = require('./routes/authRoutes')
const storeRoutes = require('./routes/storeRoutes')
const balanceRoutes = require('./routes/balanceRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/store', storeRoutes)
server.use('/api/v1/balance', balanceRoutes)

module.exports = server
