import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import LandingPage from "./routes/LandingPage";
import MoonPage from "./routes/MoonPage";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/solar-system-dashboard/" element={<LandingPage />} />
          <Route path="/solar-system-dashboard/moon" element={<MoonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
