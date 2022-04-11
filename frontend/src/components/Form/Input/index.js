import { StyledIcon, StyledInput, StyledInputContainer } from "./Input.styled"

const Input = (props) => {
  const onChange = (e) => props.onChange && props.onChange(e.target.value)

  return (
    <StyledInputContainer>
      <StyledInput onChange={onChange} {...props} />
      {props.icon && <StyledIcon>{props.icon}</StyledIcon>}
    </StyledInputContainer>
  )
}

export default Input
