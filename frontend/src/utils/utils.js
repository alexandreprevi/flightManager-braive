export const timeConvert = (min) => {
  var num = min
  var hours = num / 60
  var rhours = Math.floor(hours)
  var minutes = (hours - rhours) * 60
  var rminutes = Math.round(minutes)

  return `${
    rhours > 0
      ? rhours + " hours and " + rminutes + " minutes"
      : rminutes + " minutes"
  }`
}

export const formatDate = (date) => {
  return (
    new Date(date).toDateString() + " " + new Date(date).toLocaleTimeString()
  )
}
