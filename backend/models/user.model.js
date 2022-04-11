const mongoose = require("mongoose")

module.exports = mongoose.model(
  "User",
  mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, "Please add a username"],
        unique: true,
      },
      email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
      },
    },
    {
      timestamps: true,
    }
  )
)
