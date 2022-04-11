import styled from "styled-components"
import theme from "../../theme"

export const PageWrapper = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    padding: 0 4rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 0 6rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.largeDesktop}) {
    max-width: calc(${theme.breakPoints.largeDesktop}px + 12rem);
    padding: 0 6rem;
  }
`
