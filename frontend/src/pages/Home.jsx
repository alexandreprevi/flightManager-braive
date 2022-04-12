import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { reset as resetAuth } from "../features/auth/authSlice"
import {
  getAllFlights,
  reset as resetFlight,
} from "../features/flight/flightSlice"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { flights, isError, isLoading } = useSelector((state) => state.flight)

  useEffect(() => {
    if (!user) navigate("/login")

    dispatch(getAllFlights())

    return () => {
      dispatch(resetAuth())
      dispatch(resetFlight())
    }
  }, [user, navigate, dispatch])

  if (isError) return <>Could not load flights. Please try again</>
  if (isLoading) return <>Loading Flights...</>

  return (
    <>
      <div>Hi {user.username}</div>
      {flights && flights.length > 0 ? (
        flights.map((flight, index) => <p key={index}>{flight.name}</p>)
      ) : (
        <>No flights to display</>
      )}
    </>
  )
}

export default Home
