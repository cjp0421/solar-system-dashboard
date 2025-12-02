import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import LandingPage from "./routes/LandingPage";
import MoonPage from "./routes/MoonPage";
import NotFoundPage from "./routes/NotFoundPage";
import { Box } from "@mui/material";
import './index.css';

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/solar-system-dashboard/" element={<LandingPage />} />
            <Route path="/solar-system-dashboard/moon" element={<MoonPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;
