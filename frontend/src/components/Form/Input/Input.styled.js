import styled from "styled-components"
import { flexElementStyles } from "../../UI/Flex.styled"

export const StyledInputContainer = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  ${flexElementStyles}
  font-size: 1rem;
  width: 100%;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.darkGrey};
  padding-left: ${({ icon }) => (icon ? "3rem" : "0.5rem")};
  padding-right: 0.5rem;
  height: 3rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.lightBg};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
`

export const StyledIcon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  top: 0.5rem;
  bottom: 0.5rem;
  left: 0.5rem;
  color: ${({ theme }) => theme.colors.mediumGrey};
`
