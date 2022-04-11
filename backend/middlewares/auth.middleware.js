const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401)
    throw new Error("Not authenticated")
  }

  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]
  } else {
    token = null
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select("-password")
      next()
    } catch (error) {
      res.status(401)
      throw new Error("Not authenticated")
    }
  } else {
    res.status(401)
    throw new Error("Not authenticated")
  }
})

module.exports = authMiddleware
