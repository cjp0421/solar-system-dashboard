import { Box, Button, Grid, Typography } from "@mui/material";
import type { CelstialBodyConfig } from "../types/celestialBodyConfig";

type HeroProps = {
    refetch: () => void;
    CelstialBodyConfig?: CelstialBodyConfig;
}

function Hero({ refetch, CelstialBodyConfig }: HeroProps) {
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
                    {CelstialBodyConfig?.title}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '3rem' }}>
                    {CelstialBodyConfig?.subtitle}
                </Typography>
                <Button
                    id={"hero-cta"}
                    href={CelstialBodyConfig?.ctaTarget}
                    variant="contained"
                    onClick={refetch}
                    sx={{ mt: 2, backgroundColor: '#000' }}
                >
                    {CelstialBodyConfig?.ctaLabel}
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
                    {CelstialBodyConfig?.ctaAnimation}
                </Box>
            </Grid>
        </Grid>
    );
}

export default Hero;