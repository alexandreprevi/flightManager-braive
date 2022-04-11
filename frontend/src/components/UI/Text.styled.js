import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { flexElementStyles } from "./Flex.styled"

const sharedStyles = css`
  ${flexElementStyles}
  color: ${({ color, theme }) => (color ? theme.colors[color] : "inherit")};
  text-align: ${({ align }) => align ?? "inherit"};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`

const TitleLarge = styled.h1`
  ${sharedStyles}
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1em;
`

const Title = styled.h2`
  ${sharedStyles}
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.1em;
`

const Body = styled.p`
  ${sharedStyles}
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
`

const Label = styled.label`
  ${sharedStyles}
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2rem;
`

const StyledLink = styled(Link)`
  ${sharedStyles}
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
`

const Caption = styled.p`
  ${sharedStyles}
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1rem;
`

export const CaptionThin = styled.p`
  ${sharedStyles}
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
`

const Text = {
  TitleLarge,
  Title,
  Body,
  Label,
  StyledLink,
  Caption,
  CaptionThin,
}

export default Text
