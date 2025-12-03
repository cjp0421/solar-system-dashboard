import { Box, Button, Stack, Typography } from "@mui/material";

type HeroProps = {
    refetch: () => void;
}

function Hero({ refetch }: HeroProps) {
    return (
        <Stack
            component="section"
            direction="row"
            sx={{
                mt: 12,
                mb: 3,
                minHeight: '60vh',
            }}>
            <Box
                sx={{
                    margin: '0 auto',
                    alignContent: 'center',
                    textAlign: 'center',
                    p: 1
                }}
            >
                <Typography
                    variant="h1"
                    align="center"
                    sx={{
                        fontSize: '3rem',
                    }}
                >
                    Learn More
                </Typography>
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        fontSize: '3rem'
                    }}
                >
                    About Earth's Moon
                </Typography>
                <Button
                    id="moon-cta"
                    href="#moon-facts"
                    variant="contained"
                    onClick={() => refetch()}
                    sx={{
                        mt: 2,
                        backgroundColor: '#000'
                    }}
                >
                    Go to Moon Data
                </Button>
            </Box>
            <Box
                component="img"
                alt="NASA image of Earth's Moon"
                src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~orig.jpg?w=1536&h=864&fit=clip&crop=faces%2Cfocalpoint"
                sx={{
                    borderRadius: '5%',
                    margin: '0 auto',
                    width: { xs: 240, sm: 300, md: 600 },
                    height: 'auto',
                    objectFit: 'cover',
                    boxShadow: 3,
                }}
            />
        </Stack>
    )
}

export default Hero;