import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function Layout() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
        >
            <NavBar />

            <Box
                component="main"
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    minHeight: 0,
                }}
            >
                <Outlet />
            </Box>

            <Footer />
        </Box>
    )
}