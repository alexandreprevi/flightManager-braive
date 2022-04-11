import { useState } from "react"
import { toast } from "react-toastify"
import { FlexContainer } from "../components/UI/Flex.styled"
import Form from "../components/Form"
import Button from "../components/UI/Button.styled"
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import Input from "../components/Form/Input"

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const { username, email, password, passwordConfirmation } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = () => {
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match")
    }
  }

  return (
    <FlexContainer flexDirection="column" flexGrow={1}>
      <Form.Wrapper onSubmit={onSubmit}>
        <Form.Section title="Register">
          <Form.Control label="Username">
            <Input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              icon={<AiOutlineUser />}
            />
          </Form.Control>
          <Form.Control label="Email">
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              icon={<AiOutlineMail />}
            />
          </Form.Control>
          <Form.Control label="Password">
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              icon={<AiOutlineLock />}
            />
          </Form.Control>
          <Form.Control label="Confirm password">
            <Input
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={onChange}
              icon={<AiOutlineLock />}
            />
          </Form.Control>
        </Form.Section>
        <Button.Secondary size="small" type="submit">
          Register
        </Button.Secondary>
      </Form.Wrapper>
    </FlexContainer>
  )
}
export default Register
