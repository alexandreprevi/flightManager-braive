import React from "react"
import Button from "../components/UI/Button.styled"
import { FlexContainer } from "../components/UI/Flex.styled"
import { useNavigate } from "react-router-dom"
import Text from "../components/UI/Text.styled"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <FlexContainer
      flexDirection="column"
      spacing="medium"
      alignItems="center"
      padding={"extraLarge"}
    >
      <Text.Title align="center" color="mediumFill">
        Page Not Found
      </Text.Title>

      <Button.Primary size="large" onClick={() => navigate("/")}>
        <Text.Body>Go Home</Text.Body>
      </Button.Primary>
    </FlexContainer>
  )
}

export default NotFound
