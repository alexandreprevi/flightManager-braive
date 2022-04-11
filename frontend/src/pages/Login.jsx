import Form from "../components/Form"
import Input from "../components/Form/Input"
import { useState } from "react"
import { FlexContainer } from "../components/UI/Flex.styled"
import Button from "../components/UI/Button.styled"
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai"

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const { username, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {}

  return (
    <FlexContainer flexDirection="column" flexGrow={1}>
      <Form.Wrapper onSubmit={onSubmit}>
        <Form.Section title="Login">
          <Form.Control label="username">
            <Input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              icon={<AiOutlineMail />}
            />
          </Form.Control>
          <Form.Control label="password">
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              icon={<AiOutlineLock />}
            />
          </Form.Control>
        </Form.Section>
        <Button.Secondary size="small" type="submit">
          Login
        </Button.Secondary>
      </Form.Wrapper>
    </FlexContainer>
  )
}
export default Login
