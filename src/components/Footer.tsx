import { Box, Link, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                px: 2,
                py: 1,
            }}
        >
            <Typography variant="body2" sx={{ visibility: "hidden" }}>
                © Carol Pedersen 2025
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                <Link href="https://github.com/cjp0421/solar-system-dashboard">GitHub</Link>
                <Link href="https://www.linkedin.com/in/carol-joy-pedersen/">LinkedIn</Link>
                <Link href="https://cjp0421.github.io/my-portfolio/">Portfolio</Link>
            </Box>

            <Typography variant="body2">
                © Carol Pedersen 2025
            </Typography>
        </Box>
    );
}

export default Footer;
