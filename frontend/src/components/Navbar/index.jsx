import { StyledIcon, StyledNavbar } from "./Navbar.styled"
import Button from "../UI/Button.styled"
import { GiCommercialAirplane } from "react-icons/gi"
import { FlexContainer } from "../UI/Flex.styled"
import Text from "../UI/Text.styled"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/login")
  }

  return (
    <StyledNavbar>
      <StyledIcon>
        <GiCommercialAirplane
          size={40}
          onClick={() => navigate("/")}
          cursor="pointer"
        />
      </StyledIcon>
      <ul>
        {user ? (
          <FlexContainer spacing="medium">
            <Button.Tertiary size="small" onClick={() => navigate("/create")}>
              <Text.CaptionThin color="mediumFill">Create</Text.CaptionThin>
            </Button.Tertiary>
            <Button.Tertiary size="small" onClick={() => navigate("/")}>
              <Text.CaptionThin color="mediumFill">Flights</Text.CaptionThin>
            </Button.Tertiary>
            <Button.Tertiary size="small" onClick={onLogout}>
              <Text.CaptionThin color="mediumFill">Logout</Text.CaptionThin>
            </Button.Tertiary>
          </FlexContainer>
        ) : (
          <FlexContainer spacing="medium">
            <Text.StyledLink to="/login" color="mediumFill">
              Login
            </Text.StyledLink>

            <Text.StyledLink to="/register" color="mediumFill">
              Register
            </Text.StyledLink>
          </FlexContainer>
        )}
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
