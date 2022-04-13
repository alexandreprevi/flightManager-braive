import { formatDate, timeConvert } from "../../utils/utils"
import { Card } from "../UI/Card.styled"
import { FlexContainer } from "../UI/Flex.styled"
import Text from "../UI/Text.styled"

const FlightItem = (props) => {
  return (
    <Card borderColor="darkFill" padding="medium" borderRadius="medium">
      <FlexContainer flexDirection="column" spacing="small">
        <FlexContainer
          justifyContent="space-between"
          wrap="wrap"
          padding={{ bottom: "medium" }}
        >
          <Text.Title color="mediumFill">{props.flight.flightName}</Text.Title>
          <Text.Body color="mediumFill">
            n° {props.flight.flightNumber}
          </Text.Body>
        </FlexContainer>
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Text.CaptionThin color="mediumGrey">
            Scheduled Date & Time:
          </Text.CaptionThin>
          <Text.Body color="mediumFill">
            {formatDate(props.flight.scheduledDateAndTime)}
          </Text.Body>
        </FlexContainer>
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Text.CaptionThin color="mediumGrey">
            Arrival Date & Time:
          </Text.CaptionThin>
          <Text.Body color="mediumFill">
            {formatDate(props.flight.expectedArrivalDateAndTime)}
          </Text.Body>
        </FlexContainer>
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Text.CaptionThin color="mediumGrey">
            Departure from:
          </Text.CaptionThin>
          <Text.Body color="mediumFill">{props.flight.departureFrom}</Text.Body>
        </FlexContainer>
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Text.CaptionThin color="mediumGrey">Destination:</Text.CaptionThin>
          <Text.Body color="mediumFill">{props.flight.destination}</Text.Body>
        </FlexContainer>
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Text.CaptionThin color="mediumGrey">Duration:</Text.CaptionThin>
          <Text.Body color="mediumFill">
            {timeConvert(props.flight.duration)}
          </Text.Body>
        </FlexContainer>
        <FlexContainer
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Text.CaptionThin color="mediumGrey">Fare:</Text.CaptionThin>
          <Text.Body color="mediumFill">{props.flight.fare} $</Text.Body>
        </FlexContainer>
      </FlexContainer>
    </Card>
  )
}

export default FlightItem
