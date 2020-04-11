const express = require("express")

const carRouter = require('../api/car-router.js')

const server = express()
server.use(express.json())

server.use('/api/cars', carRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Error receiving the data"
  })
})

module.exports = server