import styled from "styled-components"

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0.8rem 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    padding: 0.8rem 4rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 0.8rem 6rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.largeDesktop}) {
    padding: 0.8rem 12rem;
  }
`

export const StyledIcon = styled.span`
  color: ${({ theme }) => theme.colors.mediumFill};
`
