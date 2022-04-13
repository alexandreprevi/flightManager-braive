import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FlexContainer } from "../components/UI/Flex.styled"
import { createFlight } from "../features/flight/flightSlice"
import Form from "../components/Form"
import Input from "../components/Form/Input"
import Button from "../components/UI/Button.styled"

const CreateFlight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    flightName: "",
    flightNumber: "",
    scheduledDate: "",
    scheduledTime: "",
    expectedArrivalDate: "",
    expectedArrivalTime: "",
    departureFrom: "",
    destination: "",
    fare: "",
    duration: "",
  })

  const {
    flightName,
    flightNumber,
    scheduledDate,
    scheduledTime,
    expectedArrivalDate,
    expectedArrivalTime,
    departureFrom,
    destination,
    fare,
    duration,
  } = formData

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.flight
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () => {
    if (Object.values(formData).some((value) => value === "" || value === 0)) {
      toast.error("All fields are required")
      return
    }

    const scheduledDateAndTime = `${scheduledDate}T${scheduledTime}:00`
    const expectedArrivalDateAndTime = `${expectedArrivalDate}T${expectedArrivalTime}:00`

    if (
      Date.parse(scheduledDateAndTime) > Date.parse(expectedArrivalDateAndTime)
    ) {
      toast.error(
        "Arrival date & time must be later than departure date & time"
      )
      return
    }

    dispatch(
      createFlight({
        flightName: flightName.charAt(0).toUpperCase() + flightName.slice(1),
        flightNumber,
        scheduledDateAndTime,
        expectedArrivalDateAndTime,
        departureFrom,
        destination,
        fare,
        duration,
      })
    )
    navigate("/")
  }

  useEffect(() => {
    if (isError) toast.error(message)
  }, [isError, isSuccess, message, navigate])

  return (
    <FlexContainer flexDirection="column" spacing="medium" flexGrow={1}>
      <Form.Wrapper onSubmit={onSubmit}>
        <Form.Section title="Create Flight">
          <Form.Control label="name">
            <Input
              type="text"
              name="flightName"
              value={flightName}
              onChange={onChange}
            />
          </Form.Control>
          <Form.Control label="number">
            <Input
              type="number"
              name="flightNumber"
              value={flightNumber}
              onChange={onChange}
            />
          </Form.Control>

          <Form.Control label="scheduled date & time">
            <FlexContainer flexDirection="column" spacing="small">
              <Input
                type="date"
                name="scheduledDate"
                value={scheduledDate}
                onChange={onChange}
              />
              <Input
                type="time"
                name="scheduledTime"
                value={scheduledTime}
                onChange={onChange}
                flexBasis="large"
              />
            </FlexContainer>
          </Form.Control>
          <Form.Control label="expected arrival date & time">
            <FlexContainer flexDirection="column" spacing="small">
              <Input
                type="date"
                name="expectedArrivalDate"
                value={expectedArrivalDate}
                onChange={onChange}
              />
              <Input
                type="time"
                name="expectedArrivalTime"
                value={expectedArrivalTime}
                onChange={onChange}
                flexBasis="large"
              />
            </FlexContainer>
          </Form.Control>

          <Form.Control label="departure from">
            <Input
              type="text"
              name="departureFrom"
              value={departureFrom}
              onChange={onChange}
            />
          </Form.Control>
          <Form.Control label="destination">
            <Input
              type="text"
              name="destination"
              value={destination}
              onChange={onChange}
            />
          </Form.Control>
          <Form.Control label="duration in min">
            <Input
              type="number"
              name="duration"
              value={duration}
              onChange={onChange}
            />
          </Form.Control>
          <Form.Control label="fare in $">
            <Input type="number" name="fare" value={fare} onChange={onChange} />
          </Form.Control>
        </Form.Section>
        <Button.Secondary size="small" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </Button.Secondary>
      </Form.Wrapper>
      <Button.Secondary size="small" onClick={() => navigate(-1)}>
        Cancel
      </Button.Secondary>
    </FlexContainer>
  )
}

export default CreateFlight
