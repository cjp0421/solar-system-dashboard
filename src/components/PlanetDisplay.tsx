import { Box, Typography } from "@mui/material";

function PlanetDisplay() {
    return (
        <>
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

export default PlanetDisplay;