import React from "react"
import { FlexContainer } from "../UI/Flex.styled"
import Text from "../UI/Text.styled"

const Wrapper = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit()
  }

  return (
    <form onSubmit={onSubmit}>
      <FlexContainer flexDirection="column" spacing="large">
        {props.children}
      </FlexContainer>
    </form>
  )
}

const Section = (props) => {
  return (
    <FlexContainer flexDirection="column" spacing="medium">
      {props.title && <Text.Title color="mediumFill">{props.title}</Text.Title>}
      {props.children}
    </FlexContainer>
  )
}

const Control = (props) => {
  return (
    <FlexContainer flexDirection="column" spacing="extraSmall">
      <Text.Label color="mediumGrey" uppercase>
        <FlexContainer flexDirection="column" spacing="extraSmall">
          {props.label}
          {props.description && (
            <Text.CaptionThin color="lightGrey">
              {props.description}
            </Text.CaptionThin>
          )}
          {props.children}
          {props.message && (
            <Text.Caption color="error">{props.message}</Text.Caption>
          )}
        </FlexContainer>
      </Text.Label>
    </FlexContainer>
  )
}

const Form = {
  Wrapper,
  Section,
  Control,
}

export default Form
