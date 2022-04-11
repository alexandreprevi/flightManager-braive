import styled from "styled-components"
import { flexElementStyles } from "./Flex.styled"

export const Card = styled.div`
  ${flexElementStyles}
  border-style: solid;
  background-color: ${({ background, theme }) =>
    background ? theme.colors[background] : theme.colors["lightBg"]};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius
      ? theme.card.radius[borderRadius]
      : theme.card.radius["default"]};
  border-color: ${({ borderColor, theme }) =>
    borderColor ? theme.colors[borderColor] : "transparent"};
  border-width: ${({ borderWidth, borderColor }) =>
    borderWidth ? `${borderWidth}px` : borderColor ? `1px` : 0};
  box-shadow: ${({ shadow, theme }) =>
    shadow ? theme.card.shadows[shadow] : theme.card.shadows["default"]};
  padding: ${({ padding, theme }) =>
    padding ? theme.spacing.edges(padding) : "0"};
`
