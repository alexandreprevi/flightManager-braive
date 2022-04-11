const expressAsyncHandler = require("express-async-handler")
const Flight = require("../models/flight.model")

const getAllFlights = expressAsyncHandler(async (req, res) => {
  const flights = await Flight.find()
  res.status(200).json(flights)
})

const createFlight = expressAsyncHandler(async (req, res) => {
  const flight = await Flight.create({
    createdBy: req.user.id,
    name: req.body.name,
    number: req.body.number,
    departureFrom: req.body.departureFrom,
    destination: req.body.destination,
    scheduledDateAndTime: req.body.scheduledDateAndTime,
    expectedArrivalDateAndTime: req.body.expectedArrivalDateAndTime,
    fare: req.body.fare,
    duration: req.body.duration,
  })

  res.status(200).json(flight)
})

module.exports = {
  getAllFlights,
  createFlight,
}
