import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import Form from "../components/Form"
import Input from "../components/Form/Input"
import { useEffect, useState } from "react"
import { FlexContainer } from "../components/UI/Flex.styled"
import Button from "../components/UI/Button.styled"
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai"
import { login, reset } from "../features/auth/authSlice"
import { toast } from "react-toastify"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const { username, password } = formData

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = () => {
    dispatch(login({ username, password }))
  }

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess || user) navigate("/")

    dispatch(reset())
  }, [user, isSuccess, isError, message, navigate, dispatch])

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
              icon={<AiOutlineUser />}
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
        <Button.Secondary size="small" type="submit" disabled={isLoading}>
          Login
        </Button.Secondary>
      </Form.Wrapper>
    </FlexContainer>
  )
}
export default Login
