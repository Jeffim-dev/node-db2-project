const express = require('express')
const db = require("../data/db-config")

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await db('cars')
    res.json(cars)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const car = await db("cars").where("id", req.params.id).first()
    if (car) {
      res.json(car)
    } else {
      res.status(400).json({ message: "ID not found"})
    }
  } catch(err) {
      next(err)
  }
})

router.post('/', async (req, res, next) => {
  try { 
    const payload = req.body;
    const [id] = await db("cars").insert(payload)
    const newCar = await db("cars").where("id", id).first()
    res.status(201).json(newCar)
  } catch(err) {
      next(err)
  }
})


module.exports = router;