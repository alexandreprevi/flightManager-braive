import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import GlobalStyles from "./GlobalStyles"
import theme from "./theme"
import "./App.css"

// pages
import CreateFlight from "./pages/CreateFlight"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"

// components
import Navbar from "./components/Navbar"
import { PageWrapper } from "./components/UI/PageWrapper.styled"
import { ThemeProvider } from "styled-components"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <>
            <Navbar />
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateFlight />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageWrapper>
          </>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}

export default App
