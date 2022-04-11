const mongoose = require("mongoose")

module.exports = mongoose.model(
  "Flight",
  mongoose.Schema(
    {
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      name: {
        type: String,
        required: [true, "Please add a flight name"],
      },
      number: {
        type: Number,
        required: [true, "Please add a flight number"],
      },
      scheduledDateAndTime: {
        type: String,
        required: [true, "Please add a scheduled date & time"],
      },
      expectedArrivalDateAndTime: {
        type: String,
        required: [true, "Please add an expected arrival date & time"],
      },
      departureFrom: {
        type: String,
        required: [true, "Please add a departure location"],
      },
      destination: {
        type: String,
        required: [true, "Please add a destination"],
      },
      fare: {
        type: Number,
        required: [true, "Please add a fare"],
      },
      duration: {
        type: Number,
        required: [true, "Please add a duration"],
      },
    },
    {
      timestamps: true,
    }
  )
)
