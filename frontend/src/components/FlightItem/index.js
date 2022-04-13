import { Card } from "../UI/Card.styled"
import { FlexContainer } from "../UI/Flex.styled"
import Text from "../UI/Text.styled"

const FlightItem = (props) => {
  return (
    <Card borderColor="darkFill" padding="medium" borderRadius="medium">
      <FlexContainer flexDirection="column">
        <Text.Title color="mediumFill">{props.flight.flightName}</Text.Title>
        <Text.Body color="mediumFill">n° {props.flight.flightNumber}</Text.Body>
        <Text.Body color="mediumFill">
          Scheduled Date & Time: {props.flight.scheduledDateAndTime}
        </Text.Body>
        <Text.Body color="mediumFill">
          Departure from: {props.flight.departureFrom}
        </Text.Body>
        <Text.Body color="mediumFill">
          Destination: {props.flight.destination}
        </Text.Body>
      </FlexContainer>
    </Card>
  )
}

export default FlightItem
