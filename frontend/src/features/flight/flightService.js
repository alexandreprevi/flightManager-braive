import axios from "axios"

const BASE_URL = "http://localhost:5000/api/flights/"

const getAuthorizationHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const createFlight = async (flightData, token) => {
  const res = await axios.post(
    BASE_URL,
    flightData,
    getAuthorizationHeaders(token)
  )

  return res.data
}

const getAllFlights = async (token) => {
  const res = await axios.get(BASE_URL, getAuthorizationHeaders(token))

  return res.data
}

const flightService = {
  createFlight,
  getAllFlights,
}

export default flightService
