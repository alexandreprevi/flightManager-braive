import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FlightItem from "../components/FlightItem"
import Input from "../components/Form/Input"
import { FlexContainer } from "../components/UI/Flex.styled"
import Text from "../components/UI/Text.styled"
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

  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (!user) navigate("/login")

    dispatch(getAllFlights())

    return () => {
      dispatch(resetAuth())
      dispatch(resetFlight())
    }
  }, [user, navigate, dispatch])

  useEffect(() => {
    if (searchValue) console.log(searchValue)
  }, [searchValue])

  if (isError) return <>Could not load flights. Please try again</>
  if (isLoading) return <>Loading Flights...</>

  return (
    <FlexContainer
      flexDirection="column"
      wrap="wrap"
      padding="medium"
      spacing="large"
      flexBasis="large"
      flexGrow={1}
    >
      <Text.Title>Hi {user.username}</Text.Title>
      <Input
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      ></Input>
      {flights && flights.length > 0 ? (
        flights
          .filter((flight) => {
            if (
              flight.flightName.toLowerCase().includes(searchValue) ||
              flight.scheduledDateAndTime.toLowerCase().includes(searchValue) ||
              flight.departureFrom.toLowerCase().includes(searchValue) ||
              flight.destination.toLowerCase().includes(searchValue)
            ) {
              return true
            } else {
              return false
            }
          })
          .map((flight) => <FlightItem key={flight._id} flight={flight} />)
      ) : (
        <>No flights to display</>
      )}
    </FlexContainer>
  )
}

export default Home
