const path = require("path")
const express = require("express")
const dotenv = require("dotenv").config()
const hpp = require("hpp")
const compression = require("compression")
const cors = require("cors")
const helmet = require("helmet")
const { errorHandler } = require("./middlewares/error.middleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", require("./routes/user.routes"))
app.use("/api/flights", require("./routes/flight.routes"))

app.use(errorHandler)

app.listen(port, () => console.log(`listening on port ${port}`))
