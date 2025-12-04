import { Box, Button, Grid, Typography } from "@mui/material";
import MoonAnimation from "./moonAnimation/MoonAnimation";
type HeroProps = {
    refetch: () => void;
}

function Hero({ refetch }: HeroProps) {
    return (
        <Grid
            component="section"
            container
            sx={{
                mt: 12,
                mb: 3,
                minHeight: '60vh',
                alignItems: 'center',
            }}
            spacing={2}
        >
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
                <Typography variant="h1" sx={{ fontSize: '3rem' }}>
                    Learn More
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '3rem' }}>
                    About Earth's Moon
                </Typography>
                <Button
                    id="moon-cta"
                    href="#moon-facts"
                    variant="contained"
                    onClick={refetch}
                    sx={{ mt: 2, backgroundColor: '#000' }}
                >
                    Go to Moon Data
                </Button>
            </Grid>

            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#000",
                        borderRadius: "50%",
                        p: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mr: { md: 3 },
                    }}
                >
                    <MoonAnimation />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Hero;