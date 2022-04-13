import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FlightItem from "../components/FlightItem"
import Input from "../components/Form/Input"
import { AiOutlineSearch } from "react-icons/ai"
import { FlexContainer } from "../components/UI/Flex.styled"
import { reset as resetAuth } from "../features/auth/authSlice"
import {
  getAllFlights,
  reset as resetFlight,
} from "../features/flight/flightSlice"
import { formatDate } from "../utils/utils"
import Button from "../components/UI/Button.styled"
import Text from "../components/UI/Text.styled"

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
      {flights && flights.length > 0 ? (
        <>
          <Input
            placeholder="Search flights..."
            onChange={(e) => setSearchValue(e.target.value)}
            icon={<AiOutlineSearch />}
          ></Input>
          {flights
            .filter((flight) => {
              if (
                flight.flightName
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                formatDate(flight.scheduledDateAndTime)
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                flight.departureFrom
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                flight.destination
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              ) {
                return true
              } else {
                return false
              }
            })
            .map((flight) => (
              <FlightItem key={flight._id} flight={flight} />
            ))}
        </>
      ) : (
        <FlexContainer
          flexDirection="column"
          alignItems="center"
          spacing="medium"
          padding={"extraLarge"}
        >
          <Text.Body color="darkFill">
            No flights have been created yet.
          </Text.Body>
          <Button.Primary size="large" onClick={() => navigate("/create")}>
            <Text.Body uppercase>Create</Text.Body>
          </Button.Primary>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}

export default Home
