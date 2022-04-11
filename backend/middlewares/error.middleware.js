const errorHandler = (err, req, res, next) => {
  try {
    const statusCode = err.statusCode ?? 500
    res.status(statusCode)
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  errorHandler,
}
