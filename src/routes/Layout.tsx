import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Box component="main" sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}