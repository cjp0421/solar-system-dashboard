import { Box, Typography } from "@mui/material"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Box component="section">
        <Typography
          id="moon-facts"
          variant="h3"
          sx={{
            fontSize: '1.5rem',
            p: 2
          }}
        >
          Facts About Earth's Moon
        </Typography>
      </Box>
    </>
  )
}

export default App
