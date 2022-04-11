const express = require("express")
const router = express.Router()
const flightController = require("../controllers/flight.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router
  .route("/")
  .get(flightController.getAllFlights)
  .post(authMiddleware, flightController.createFlight)

module.exports = router
