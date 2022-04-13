import styled, { css } from "styled-components"
import { flexElementStyles } from "./Flex.styled"

const sharedStyles = css`
  ${flexElementStyles}
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  font-size: ${({ size, theme }) =>
    size ? theme.button.fontSize[size] : theme.button.fontSize["medium"]};
  height: ${({ size, theme }) =>
    size ? theme.button.height[size] : theme.button.height["medium"]};
  padding: ${({ size, theme }) =>
    size ? theme.button.padding[size] : theme.button.padding["medium"]};
  overflow: hidden;
  appearance: none;
  text-decoration: none;
  font-weight: 600;
  text-align: initial;
  background-color: ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 0.5rem;
  border-color: transparent;
  margin: 0;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.35s;
  width: ${({ width }) => width ?? "initial"};
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
    cursor: initial;
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.mediumGrey};
  }
`

export const Primary = styled.button`
  ${sharedStyles}
  background-color: ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.darkGrey};
  border: ${({ theme }) => `1px solid ${theme.colors.darkGrey}`};
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.lightBg};
  }
`

export const Secondary = styled.button`
  ${sharedStyles}
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.lightBg};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBg};
    color: ${({ theme }) => theme.colors.darkGrey};
    border: ${({ theme }) => `1px solid ${theme.colors.darkGrey}`};
  }
`
export const Tertiary = styled.button`
  ${sharedStyles}
  background-color: transparent;

  color: ${({ theme }) => theme.colors.darkFill};
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

const Button = {
  Primary,
  Secondary,
  Tertiary,
}

export default Button
