import styled, { css } from "styled-components"

export const flexElementStyles = css`
  flex-basis: ${({ flexBasis, theme }) =>
    flexBasis ? theme.contentSize[flexBasis] : "initial"};
  flex-grow: ${({ flexGrow }) => flexGrow ?? "initial"};
  flex-shrink: ${({ flexShrink }) => flexShrink ?? "initial"};
  align-self: ${({ alignSelf }) => alignSelf ?? "initial"};
  justify-self: ${({ justifySelf }) => justifySelf ?? "initial"};
`

export const FlexContainer = styled.div`
  ${flexElementStyles}
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-direction: ${({ flexDirection }) => flexDirection ?? "initial"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "initial"};
  justify-items: ${({ justifyItems }) => justifyItems ?? "initial"};
  align-items: ${({ alignItems }) => alignItems ?? "initial"};
  flex-wrap: ${({ wrap }) => wrap ?? "initial"};
  padding: ${({ padding, theme }) =>
    padding ? theme.spacing.edges(padding) : "initial"};
  gap: ${({ spacing, theme }) =>
    spacing ? theme.spacing.axis(spacing) : "initial"};
`
