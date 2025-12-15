import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import LandingPage from "./routes/LandingPage";
import MoonPage from "./routes/MoonPage";
import NotFoundPage from "./routes/NotFoundPage";
import { Box } from "@mui/material";
import './index.css';
import EarthPage from "./routes/EarthPage";
import IoPage from "./routes/IoPage";
import PhobosPage from "./routes/PhobosPage";
import MarsPage from "./routes/MarsPage";
import MercuryPage from "./routes/MercuryPage";

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
            <Route path="/solar-system-dashboard/earth" element={<EarthPage />} />
            <Route path="/solar-system-dashboard/io" element={<IoPage />} />
            <Route path="/solar-system-dashboard/phobos" element={<PhobosPage />} />
            <Route path="/solar-system-dashboard/mars" element={<MarsPage />} />
            <Route path="/solar-system-dashboard/mercury" element={<MercuryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;
